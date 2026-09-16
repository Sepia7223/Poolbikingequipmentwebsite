import { warrantyImages } from "../data/productPresentation";
export function WarrantyBadge({ years }: { years?: number }) {
  if (!years || !warrantyImages[years]) return null;
  return (
    <img
      className="pb-warranty-icon"
      src={warrantyImages[years]}
      alt={`${years}-year international warranty`}
      width="80"
      height="80"
      loading="lazy"
    />
  );
}
