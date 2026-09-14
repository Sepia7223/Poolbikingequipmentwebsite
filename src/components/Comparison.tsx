import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, Check, Columns3, X } from "lucide-react";
import { equipmentData } from "../data/equipment";
import { MAX_COMPARE, sanitizeProductIds } from "../data/discovery";

const STORAGE_KEY = "poolbiking-compare-v1";
const validIds = equipmentData.map((item) => item.id);
const ComparisonContext = createContext<{
  ids: string[];
  toggle: (id: string) => void;
  clear: () => void;
}>({ ids: [], toggle: () => {}, clear: () => {} });

export function ComparisonProvider({ children }: { children: ReactNode }) {
  const [ids, setIds] = useState<string[]>(() => {
    try {
      return sanitizeProductIds(
        JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]"),
        validIds,
      );
    } catch {
      return [];
    }
  });
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
    } catch {
      /* Comparing still works if storage is unavailable. */
    }
  }, [ids]);
  const toggle = (id: string) =>
    setIds((previous) =>
      previous.includes(id)
        ? previous.filter((item) => item !== id)
        : sanitizeProductIds([...previous, id], validIds),
    );
  return (
    <ComparisonContext.Provider
      value={{ ids, toggle, clear: () => setIds([]) }}
    >
      {children}
    </ComparisonContext.Provider>
  );
}

export const useComparison = () => useContext(ComparisonContext);

export function CompareButton({ id }: { id: string }) {
  const { ids, toggle } = useComparison();
  const selected = ids.includes(id);
  const full = !selected && ids.length >= MAX_COMPARE;
  const name =
    equipmentData.find((item) => item.id === id)?.name ?? "equipment";
  return (
    <button
      type="button"
      className={`pb-compare-button ${selected ? "is-selected" : ""}`}
      aria-label={`${selected ? "Remove" : "Compare"} ${name}${selected ? " from comparison" : ""}`}
      aria-pressed={selected}
      disabled={full}
      onClick={() => toggle(id)}
    >
      {selected ? <Check size={16} /> : <Columns3 size={16} />}{" "}
      {selected
        ? "Added to comparison"
        : full
          ? "Comparison full (3/3)"
          : "Add to compare"}
    </button>
  );
}

export function ComparisonTray() {
  const { ids, toggle, clear } = useComparison();
  const { pathname, hash } = useLocation();
  const products = ids.map(
    (id) => equipmentData.find((item) => item.id === id)!,
  );
  if (
    !ids.length ||
    pathname === "/compare" ||
    pathname === "/contact" ||
    hash === "#compare"
  )
    return null;
  return (
    <aside className="pb-compare-tray" aria-label="Your equipment comparison">
      <div className="pb-compare-tray-inner">
        <div className="pb-compare-tray-label">
          <Columns3 size={21} />
          <span aria-live="polite">
            Compare equipment{" "}
            <strong>
              {ids.length}/{MAX_COMPARE}
            </strong>
          </span>
        </div>
        <div className="pb-compare-thumbs">
          {products.map((item) => (
            <button
              type="button"
              key={item.id}
              onClick={() => toggle(item.id)}
              aria-label={`Remove ${item.name} from comparison`}
            >
              <img src={item.image} alt="" />
              <span>{item.name.replace("Poolbiking ", "")}</span>
              <X size={14} />
            </button>
          ))}
        </div>
        <button className="pb-text-button" type="button" onClick={clear}>
          Clear
        </button>
        <Link to="/equipment#compare" className="pb-button pb-button-aqua">
          Compare <ArrowRight size={16} />
        </Link>
      </div>
    </aside>
  );
}
