import { Link } from "react-router-dom";
import { ArrowRight, PlayCircle } from "lucide-react";
import type { Equipment } from "../data/equipment";
import { productVideos } from "../data/productVideos";
import { CompareButton } from "./Comparison";

import { WarrantyBadge } from "./WarrantyBadge";

export interface CatalogueState {
  category: string;
  query: string;
}

interface ProductCardProps {
  item: Equipment;
  catalogueState?: CatalogueState;
}

export function ProductCard({ item, catalogueState }: ProductCardProps) {
  const video = productVideos[item.id];
  const linkState = catalogueState ? { catalogueState } : undefined;

  return (
    <article id={`product-card-${item.id}`} className="pb-product-card">
      <div className="pb-product-media">
        <span className="pb-product-pill">{item.category}</span>
        {video && (
          <a
            href={video.url}
            target="_blank"
            rel="noreferrer"
            className="pb-video-pill"
            aria-label={`Watch video for ${item.name}`}
            title={`Watch video for ${item.name}`}
          >
            <PlayCircle size={15} /> Video
          </a>
        )}
        <Link
          to={`/equipment/${item.id}`}
          state={linkState}
          className="pb-product-image-link"
          aria-label={`View ${item.name}`}
        >
          <img src={item.image} alt={item.name} loading="lazy" />
        </Link>
      </div>

      <Link
        to={`/equipment/${item.id}`}
        state={linkState}
        className="pb-product-body"
      >
        <h3>{item.name}</h3>
        <p>{item.shortDescription}</p>
        <div className="pb-product-meta">
          {item.warrantyYears ? (
            <WarrantyBadge years={item.warrantyYears} />
          ) : (
            <span>{item.category}</span>
          )}
          <span className="pb-product-arrow">
            View details <ArrowRight size={13} />
          </span>
        </div>
      </Link>
      <div className="pb-product-compare">
        <CompareButton id={item.id} />
      </div>
    </article>
  );
}
