import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

import { LandingAtacadoHeroSection } from "./landing-atacado-hero-section/landing-atacado-hero-section.component";
import { SolucoesLEFT } from "./solucoes-left/solucoes-left.component";
import { Videos } from "./videos/videos.component";
import { BotesWHATSCTT } from "./botes-whats-ctt/botes-whats-ctt.component";
import { SolucoesRIGHT } from "./solucoes-right/solucoes-right.component";
import { LandingSATConteudo } from "./landing-sat-conteudo/landing-sat-conteudo.component";
import { LandingFiscalServicos } from "./landing-fiscal-servicos/landing-fiscal-servicos.component";
import { LandingSATServicos } from "./landing-sat-servicos/landing-sat-servicos.component";
import { LandingAtacadoServicos } from "./landing-atacado-servicos/landing-atacado-servicos.component";
import { Footer } from "./footer/footer.component";
import { NavigationLinks1 } from "./navigation-links1/navigation-links1.component";
import { LogoIcone } from "./logo-icone/logo-icone.component";
import { LandingServicoServicos } from "./landing-servico-servicos/landing-servico-servicos.component";
import { NavigationLinks2 } from "./navigation-links2/navigation-links2.component";
import { LandingFiscalHeroSection } from "./landing-fiscal-hero-section/landing-fiscal-hero-section.component";
import { LandingAtacadoConteudo } from "./landing-atacado-conteudo/landing-atacado-conteudo.component";
import { LandingSATHeroSection } from "./landing-sat-hero-section/landing-sat-hero-section.component";
import { CampoFORMS } from "./campo-forms/campo-forms.component";
import { HomeServicos } from "./home-servicos/home-servicos.component";
import { LandingFiscal } from "./landing-fiscal/landing-fiscal.component";
import { Menu } from "./menu/menu.component";
import { NavigationLinks } from "./navigation-links/navigation-links.component";
import { SolutionCardComponent } from "./solution-card/solution-card.component";

@NgModule({
  declarations: [
    LandingAtacadoHeroSection,
    SolucoesLEFT,
    Videos,
    BotesWHATSCTT,
    SolucoesRIGHT,
    LandingSATConteudo,
    LandingFiscalServicos,
    LandingSATServicos,
    LandingAtacadoServicos,
    Footer,
    NavigationLinks1,
    LogoIcone,
    LandingServicoServicos,
    NavigationLinks2,
    LandingFiscalHeroSection,
    LandingAtacadoConteudo,
    LandingSATHeroSection,
    CampoFORMS,
    HomeServicos,
    LandingFiscal,
    Menu,
    NavigationLinks,
    SolutionCardComponent
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    LandingAtacadoHeroSection,
    SolucoesLEFT,
    Videos,
    BotesWHATSCTT,
    SolucoesRIGHT,
    LandingSATConteudo,
    LandingFiscalServicos,
    LandingSATServicos,
    LandingAtacadoServicos,
    Footer,
    NavigationLinks1,
    LogoIcone,
    LandingServicoServicos,
    NavigationLinks2,
    LandingFiscalHeroSection,
    LandingAtacadoConteudo,
    LandingSATHeroSection,
    CampoFORMS,
    HomeServicos,
    LandingFiscal,
    Menu,
    NavigationLinks,
    SolutionCardComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}
