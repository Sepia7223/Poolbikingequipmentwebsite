import { EquipmentFinder } from "../components/EquipmentFinder";
import { PhotoHero } from "../components/PhotoHero";
import image from "../content/optimized/riders-in-water.webp";
export function FindYourFitPage() {
  return (
    <>
      <PhotoHero
        image={image}
        eyebrow="Find your fit"
        title="Your pool. Your possibilities."
        description="Explore equipment for your facility, your people and your pool environment."
      />
      <EquipmentFinder />
    </>
  );
}
