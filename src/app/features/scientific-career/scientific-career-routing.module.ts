import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatisticalMechanicsComponent } from './statistical-mechanics/statistical-mechanics.component';
import { ThermodynamicFluctuationsAndStatisticalPhysicsComponent } from './thermodynamic-fluctuations-and-statistical-physics/thermodynamic-fluctuations-and-statistical-physics.component';
import { TheoryOfCriticalOpalescenceComponent } from './theory-of-critical-opalescence/theory-of-critical-opalescence.component';
import { AnnusMirabilisPapersComponent } from './annus-mirabilis-papers/annus-mirabilis-papers.component';
import { SpecialRelativityComponent } from './special-relativity/special-relativity.component';
import { GeneralRelativityComponent } from './general-relativity/general-relativity.component';
import { GeneralRelativityAndTheEquivalencePrincipleComponent } from './general-relativity-and-the-equivalence-principle/general-relativity-and-the-equivalence-principle.component';
import { GravitationalWavesComponent } from './gravitational-waves/gravitational-waves.component';
import { HoleArgumentAndEntwurfTheoryComponent } from './hole-argument-and-entwurf-theory/hole-argument-and-entwurf-theory.component';
import { PhysicalCosmologyComponent } from './physical-cosmology/physical-cosmology.component';
import { EnergyMomentumPseudotensorComponent } from './energy-momentum-pseudotensor/energy-momentum-pseudotensor.component';
import { WormholesComponent } from './wormholes/wormholes.component';
import { EinsteinCartanTheoryComponent } from './einstein-cartan-theory/einstein-cartan-theory.component';
import { EquationsOfMotionComponent } from './equations-of-motion/equations-of-motion.component';
import { OldQuantumTheoryComponent } from './old-quantum-theory/old-quantum-theory.component';
import { PhotonsAndEnergyQuantaComponent } from './photons-and-energy-quanta/photons-and-energy-quanta.component';
import { QuantizedAtomicVibrationsComponent } from './quantized-atomic-vibrations/quantized-atomic-vibrations.component';
import { BoseEinsteinStatisticsComponent } from './bose-einstein-statistics/bose-einstein-statistics.component';
import { WaveParticleDualityComponent } from './wave-particle-duality/wave-particle-duality.component';
import { ZeroPointEnergyComponent } from './zero-point-energy/zero-point-energy.component';
import { StimulatedEmissionComponent } from './stimulated-emission/stimulated-emission.component';
import { MatterWavesComponent } from './matter-waves/matter-waves.component';
import { QuantumMechanicsComponent } from './quantum-mechanics/quantum-mechanics.component';
import { EinsteinsObjectionsToQuantumMechanicsComponent } from './einsteins-objections-to-quantum-mechanics/einsteins-objections-to-quantum-mechanics.component';
import { BohrVersusEinsteinComponent } from './bohr-versus-einstein/bohr-versus-einstein.component';
import { EinsteinPodolskyRosenParadoxComponent } from './einstein-podolsky-rosen-paradox/einstein-podolsky-rosen-paradox.component';
import { UnifiedFieldTheoryComponent } from './unified-field-theory/unified-field-theory.component';
import { OtherInvestigationsComponent } from './other-investigations/other-investigations.component';
import { CollaborationWithOtherScientistsComponent } from './collaboration-with-other-scientists/collaboration-with-other-scientists.component';
import { EinsteinDeHassExperimentComponent } from './einstein-de-hass-experiment/einstein-de-hass-experiment.component';
import { EinsteinAsAnInventorComponent } from './einstein-as-an-inventor/einstein-as-an-inventor.component';
import { ScientificCareerComponent } from './scientific-career/scientific-career.component';

const routes: Routes = [
  { path: '', component: ScientificCareerComponent },
  { path: 'statistical-mechanics', component: StatisticalMechanicsComponent },
  { path: 'thermodynamic-fluctuations-and-statistical-physics', component: ThermodynamicFluctuationsAndStatisticalPhysicsComponent },
  { path: 'theory-of-critical-opalescence', component: TheoryOfCriticalOpalescenceComponent },
  { path: '1905-annus-mirabilis-papers', component: AnnusMirabilisPapersComponent },
  { path: 'special-relativity', component: SpecialRelativityComponent },
  { path: 'general-relativity', component: GeneralRelativityComponent },
  { path: 'general-relativity-and-the-equivalence-principle', component: GeneralRelativityAndTheEquivalencePrincipleComponent },
  { path: 'gravitational-waves', component: GravitationalWavesComponent },
  { path: 'hole-argument-and-entwurf-theory', component: HoleArgumentAndEntwurfTheoryComponent },
  { path: 'physical-cosmology', component: PhysicalCosmologyComponent },
  { path: 'energy-momentum-pseudotensor', component: EnergyMomentumPseudotensorComponent },
  { path: 'wormholes', component: WormholesComponent },
  { path: 'einstein-cartan-theory', component: EinsteinCartanTheoryComponent },
  { path: 'equations-of-motion', component: EquationsOfMotionComponent },
  { path: 'old-quantum-theory', component: OldQuantumTheoryComponent },
  { path: 'photons-and-energy-quanta', component: PhotonsAndEnergyQuantaComponent },
  { path: 'quantized-atomic-vibrations', component: QuantizedAtomicVibrationsComponent },
  { path: 'bose-einstein-statistics', component: BoseEinsteinStatisticsComponent },
  { path: 'wave-particle-duality', component: WaveParticleDualityComponent },
  { path: 'zero-point-energy', component: ZeroPointEnergyComponent },
  { path: 'stimulated-emission', component: StimulatedEmissionComponent },
  { path: 'matter-waves', component: MatterWavesComponent },
  { path: 'quantum-mechanics', component: QuantumMechanicsComponent },
  { path: 'einsteins-objections-to-quantum-mechanics', component: EinsteinsObjectionsToQuantumMechanicsComponent },
  { path: 'bohr-versus-einstein', component: BohrVersusEinsteinComponent },
  { path: 'epr-paradox', component: EinsteinPodolskyRosenParadoxComponent },
  { path: 'unified-field-theory', component: UnifiedFieldTheoryComponent },
  { path: 'other-investigations', component: OtherInvestigationsComponent },
  { path: 'collaboration-with-other-scientists', component: CollaborationWithOtherScientistsComponent },
  { path: 'einstein-de-haas-experiment', component: EinsteinDeHassExperimentComponent },
  { path: 'einstein-as-an-inventor', component: EinsteinAsAnInventorComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScientificCareerRoutingModule { }
