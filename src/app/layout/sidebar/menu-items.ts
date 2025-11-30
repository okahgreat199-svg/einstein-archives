import { MenuItem } from "../../shared/interfaces/menu-item";

export const MENU_ITEMS: MenuItem[] = [
    {
        icon: 'user',
        label: 'Life and career',
        isOpen: false,
        children: [
            { label: 'Childhood, youth and education', route: 'life-and-career/childhood-youth-and-education' },
            { label: 'Marriages, relationships and children', route: 'life-and-career/marriages-relationships-and-children' },
            { label: 'Assistant at the Swiss Patent Office (1902–1909)', route: 'life-and-career/assistant-at-the-swiss-patent-office' },
            { label: 'First scientific papers (1900–1905)', route: 'life-and-career/first-scientific-papers' },
            { label: 'Academic career in Europe (1908–1933)', route: 'life-and-career/academic-career-in-europe' },
            { label: 'Putting general relativity to the test (1919)', route: 'life-and-career/putting-general-relativity-to-the-test' },
            { label: 'Coming to terms with fame (1921–1923)', route: 'life-and-career/coming-to-terms-with-fame' },
            { label: 'Serving the League of Nations (1922–1932)', route: 'life-and-career/serving-the-league-of-nations' },
            { label: 'Touring South America (1925)', route: 'life-and-career/touring-south-america' },
            { label: 'Touring the US (1930–1931)', route: 'life-and-career/touring-the-us' },
            { label: 'Emigration to the US (1933)', route: 'life-and-career/emigration-to-the-us' },
            { label: 'Refugee status', route: 'life-and-career/refugee-status' },
            { label: 'Resident scholar at the Institute for Advanced Study', route: 'life-and-career/resident-scholar-at-the-institute-for-advanced-study' },
            { label: 'World War II and the Manhattan Project', route: 'life-and-career/world-war-ii-and-the-manhattan-project' },
            { label: 'US citizenship', route: 'life-and-career/us-citizenship' },
            { label: 'Personal views', children:[
                 { label: 'Political views', route: 'life-and-career/political-views' },
            { label: 'Relationship with Zionism', route: 'life-and-career/relationship-with-zionism' },
            { label: 'Religious and philosophical views', route: 'life-and-career/religious-and-philosophical-views' },
            { label: 'Love of music', route: 'life-and-career/love-of-music' },
            ] },
            { label: 'Death', route: 'life-and-career/death' }
        ]
    },
    {
        icon: 'activity',
        label: 'Scientific career',
        route: 'scientific-career',
        isOpen: false,
        children: [
            { label: 'Statistical mechanics', children:[
                 { label: 'Thermodynamic fluctuations and statistical physics', route: 'scientific-career/thermodynamic-fluctuations-and-statistical-physics' },
            { label: 'Theory of critical opalescence', route: 'scientific-career/theory-of-critical-opalescence' },
            ] },   
            { label: '1905 – Annus Mirabilis papers', route: 'scientific-career/1905-annus-mirabilis-papers' },
            { label: 'Special relativity', route: 'scientific-career/special-relativity' },
            { label: 'General relativity', children: [{ label: 'General relativity and the equivalence principle', route: 'scientific-career/general-relativity-and-the-equivalence-principle' },
            { label: 'Gravitational waves', route: 'scientific-career/gravitational-waves' },
            { label: 'Hole argument and Entwurf theory', route: 'scientific-career/hole-argument-and-entwurf-theory' },
            { label: 'Physical cosmology', route: 'scientific-career/physical-cosmology' },
            { label: 'Energy momentum pseudotensor', route: 'scientific-career/energy-momentum-pseudotensor' },
            { label: 'Wormholes', route: 'scientific-career/wormholes' },
            { label: 'Einstein–Cartan theory', route: 'scientific-career/einstein-cartan-theory' },
            { label: 'Equations of motion', route: 'scientific-career/equations-of-motion' }, ] },
            
            { label: 'Old quantum theory',children:[
                { label: 'Photons and energy quanta', route: 'scientific-career/photons-and-energy-quanta' },
            { label: 'Quantized atomic vibrations', route: 'scientific-career/quantized-atomic-vibrations' },
            { label: 'Bose–Einstein statistics', route: 'scientific-career/bose-einstein-statistics' },
            { label: 'Wave–particle duality', route: 'scientific-career/wave-particle-duality' },
            { label: 'Zero-point energy', route: 'scientific-career/zero-point-energy' },
            { label: 'Stimulated emission', route: 'scientific-career/stimulated-emission' },
            { label: 'Matter waves', route: 'scientific-career/matter-waves' },
            ] },
            
            { label: 'Quantum mechanics', children: [
                  { label: "Einstein's objections to quantum mechanics", route: 'scientific-career/einsteins-objections-to-quantum-mechanics' },
            { label: 'Bohr versus Einstein', route: 'scientific-career/bohr-versus-einstein' },
            { label: 'Einstein–Podolsky–Rosen paradox', route: 'scientific-career/epr-paradox' },
            ] },
          
            { label: 'Unified field theory', route: 'scientific-career/unified-field-theory' },
            { label: 'Other investigations', route: 'scientific-career/other-investigations' },
            { label: 'Collaboration with other scientists', route: 'scientific-career/collaboration-with-other-scientists', children: [
                 { label: 'Einstein–de Haas experiment', route: 'scientific-career/einstein-de-haas-experiment' },
            { label: 'Einstein as an inventor', route: 'scientific-career/einstein-as-an-inventor' }
            ] }
           
        ]
    },
    {
        icon: 'star',
        label: 'Legacy',
        isOpen: false,
        children: [
            { label: 'Non-scientific', route: 'legacy/non-scientific' },
            { label: 'Scientific', route: 'legacy/scientific' },
            { label: 'In popular culture', route: 'legacy/in-popular-culture' },
            { label: 'Awards and honors', route: 'legacy/awards-and-honors' }
        ]
    },
    {
        icon: 'file-text',
        label: 'Publications',
        isOpen: false,
        children: [
            { label: 'Scientific', route: 'publications/scientific' },
            { label: 'Popular', route: 'publications/popular' },
            { label: 'Political', route: 'publications/political' }
        ]
    },
    { icon: 'book-open', label: 'Further reading', route: 'further-reading' },
];