import { Escolha } from "./components/Escolha/escolha";
import EventCategories from "./components/EventCategories/EventCategories";
import { EventosRealizados } from "./components/eventosRealisados/eventosRealisados";
import EventPlanningTips from "./components/EventPlanningTips/EventPlanningTips";
import { Galeres } from "./components/galeria/galeria";
import { Hero } from "./components/Hero";
import Navbar from "./components/navBar/navBar";
import PartnershipsAndSuppliers from "./components/PartnershipsAndSuppliers/PartnershipsAndSuppliers";
import PricingPackages from "./components/PricingPackages/PricingPackages";
import { SalaoEvento } from "./components/salaoEvento/salaoEvento";
import ServicesList from "./components/ServicesList/ServicesList";
import SpecializedTeam from "./components/SpecializedTeam/SpecializedTeam";
import Testimonials from "./components/Testimonials/Testimonials";
import { VideosService } from "./components/video/videos";

export default function Home() {
  return (
    <>
      <main className="min-h-screen">
        <Hero />
        <EventosRealizados />
        <VideosService />
        {/* <SalaoEvento /> */}
        {/* <Galeres /> */}
        {/* <Testimonials /> */}
        {/* <ServicesList /> */}

        {/* <EventCategories /> */}
        <Escolha />
        <SpecializedTeam />
        {/* <EventPlanningTips /> */}
        <PartnershipsAndSuppliers />
        <PricingPackages />
      </main>
    </>
  );
}
