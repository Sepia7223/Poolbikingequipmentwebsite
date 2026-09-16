import { EquipmentFinder } from "../components/EquipmentFinder";
import { PhotoHero } from "../components/PhotoHero";
import image from "../content/optimized/riders-in-water.webp";
export function FindYourFitPage() {
  return (
    <>
      <PhotoHero
        image={image}
        eyebrow="Find your fit"
        title="Find equipment for your people."
        description="Compare aquatic bikes, walking equipment and accessories by user needs and facility type."
      />
      <EquipmentFinder />
    </>
  );
}
