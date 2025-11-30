import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcademicCareerInEuropeComponent } from './academic-career-in-europe/academic-career-in-europe.component';
import { ChildhoodYouthAndEducationComponent } from './childhood-youth-and-education/childhood-youth-and-education.component';
import { MarriagesRelationshipsAndChildrenComponent } from './marriages-relationships-and-children/marriages-relationships-and-children.component';
import { AssistantAtTheSwissPatentOfficeComponent } from './assistant-at-the-swiss-patent-office/assistant-at-the-swiss-patent-office.component';
import { FirstScientificPapersComponent } from './first-scientific-papers/first-scientific-papers.component';
import { PuttingRelativityToTheTestComponent } from './putting-relativity-to-the-test/putting-relativity-to-the-test.component';
import { ComingToTermsWithFameComponent } from './coming-to-terms-with-fame/coming-to-terms-with-fame.component';
import { ServingTheLeagueOfNationsComponent } from './serving-the-league-of-nations/serving-the-league-of-nations.component';
import { TouringSouthAmericaComponent } from './touring-south-america/touring-south-america.component';
import { TouringTheUsComponent } from './touring-the-us/touring-the-us.component';
import { EmigrationToTheUsComponent } from './emigration-to-the-us/emigration-to-the-us.component';
import { RefugeeStatusComponent } from './refugee-status/refugee-status.component';
import { ResidentScholarAtTheInstituteForAdvancedStudyComponent } from './resident-scholar-at-the-institute-for-advanced-study/resident-scholar-at-the-institute-for-advanced-study.component';
import { WorldWarIiAndTheManhattanProjectComponent } from './world-war-ii-and-the-manhattan-project/world-war-ii-and-the-manhattan-project.component';
import { UsCitizenshipComponent } from './us-citizenship/us-citizenship.component';
import { PersonalViewsComponent } from './personal-views/personal-views.component';
import { PoliticalViewsComponent } from './political-views/political-views.component';
import { RelationshipWithZionismComponent } from './relationship-with-zionism/relationship-with-zionism.component';
import { ReligiousAndPhilosophicalViewsComponent } from './religious-and-philosophical-views/religious-and-philosophical-views.component';
import { LoveOfMusicComponent } from './love-of-music/love-of-music.component';
import { DeathComponent } from './death/death.component';

const routes: Routes = [
  { path: 'childhood-youth-and-education', component: ChildhoodYouthAndEducationComponent },
  { path: 'marriages-relationships-and-children', component: MarriagesRelationshipsAndChildrenComponent },
  { path: 'assistant-at-the-swiss-patent-office', component: AssistantAtTheSwissPatentOfficeComponent },
  { path: 'first-scientific-papers', component: FirstScientificPapersComponent },
  { path: 'academic-career-in-europe', component: AcademicCareerInEuropeComponent },
  { path: 'putting-general-relativity-to-the-test', component: PuttingRelativityToTheTestComponent },
  { path: 'coming-to-terms-with-fame', component: ComingToTermsWithFameComponent },
  { path: 'serving-the-league-of-nations', component: ServingTheLeagueOfNationsComponent },
  { path: 'touring-south-america', component: TouringSouthAmericaComponent },
  { path: 'touring-the-us', component: TouringTheUsComponent },
  { path: 'emigration-to-the-us', component: EmigrationToTheUsComponent },
  { path: 'refugee-status', component: RefugeeStatusComponent },
  { path: 'resident-scholar-at-the-institute-for-advanced-study', component: ResidentScholarAtTheInstituteForAdvancedStudyComponent },
  { path: 'world-war-ii-and-the-manhattan-project', component: WorldWarIiAndTheManhattanProjectComponent },
  { path: 'us-citizenship', component: UsCitizenshipComponent },
  { path: 'personal-views', component: PersonalViewsComponent },
  { path: 'political-views', component: PoliticalViewsComponent },
  { path: 'relationship-with-zionism', component: RelationshipWithZionismComponent },
  { path: 'religious-and-philosophical-views', component: ReligiousAndPhilosophicalViewsComponent },
  { path: 'love-of-music', component: LoveOfMusicComponent },
  { path: 'death', component: DeathComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LifeAndCareerRoutingModule { }
