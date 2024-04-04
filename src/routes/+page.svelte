<script>
// @ts-nocheck

	import Menu from '$lib/component/Menu.svelte'
	import '../style/global.css';
	import "@fortawesome/fontawesome-free/css/all.css";
	import ProjetCard from '$lib/component/ProjectCard.svelte';
	import ProjectDetails from '$lib/component/ProjectDetails.svelte';
	import AR from '$lib/assets/images/Projets/AR.png';
	import ar1 from '$lib/assets/images/Projets/ar/ar1.png';
	import ar2 from '$lib/assets/images/Projets/ar/ar2.png';
	import BTD from '$lib/assets/images/Projets/BTD.png';
	import btd1 from '$lib/assets/images/Projets/btd/btd1.png';
	import btd2 from '$lib/assets/images/Projets/btd/btd2.png';
	import covid from '$lib/assets/images/Projets/covid.png';
	import covid1 from '$lib/assets/images/Projets/covid/covid1.png';
	import covid2 from '$lib/assets/images/Projets/covid/covid2.png';
	import Dashboard from '$lib/assets/images/Projets/Dashboard.png';
	import dashboard1 from '$lib/assets/images/Projets/dashboard/dashboard1.png';
	import Docto from '$lib/assets/images/Projets/Docto.png';
	import docto1 from '$lib/assets/images/Projets/docto/docto1.png';
	import docto2 from '$lib/assets/images/Projets/docto/docto2.png';
	import Escape from '$lib/assets/images/Projets/Escape.png';
	import niv1 from '$lib/assets/images/Projets/escape/warning-zone.png';
	import niv2 from '$lib/assets/images/Projets/escape/screen-lvl2.png';

	export let technologies = [
		'HTML5',
		'CSS3',
		'Wordpress',
		'JavaScript',
		'React',
		'Node.js',
		'Svelte',
		'SQL',
		'MongoDB',
		'TailwindCss',
		'Git',
		'Figma',
		'Code Igniter',
		'Typescript',
		'C#',
		'Unity',
		'Sass',
		'Adobe XD',
		'Opquast',
		'Vite.js',
		'Next.js'

	];


	let projects = [
    {
      id: "covid",
      name: "COVID-19",
      description: "Réalisation d'un dashboard en PHP",
      images: [covid1, covid2],
	  content: "Le Dashboard COVID-19 est un outil interactif développé en PHP/MySQL pour analyser les données de la pandémie dans un département. Il offre une interface conviviale pour visualiser les cas, les tendances temporelles, la répartition géographique des cas, et d'autres indicateurs clés. Cet outil non seulement informe, mais éduque également en fournissant des ressources supplémentaires sur la pandémie. Ce projet universitaire démontre l'application pratique des connaissances académiques dans la résolution de problèmes du monde réel.",
	  techno : ["PHP","MySQL"],
    },
    {
      id: "ar",
      name: "Augmented Reality",
      description: "CMS d'un évènement au Chai à Vin de Rouen",
      images: [ar1,ar2],
	  content: "Ce CMS WordPress, développé dans un contexte universitaire, vise à promouvoir la réhabilitation d'un chai à vin. Facile à utiliser, il présente l'histoire du chai, les travaux en cours, et les futurs projets. Les fonctionnalités incluent des mises à jour régulières, une intégration des médias sociaux, et une optimisation pour les moteurs de recherche. Ce projet démontre l'application pratique des compétences en communication numérique pour soutenir des initiatives réelles.",
	  techno : ["Wordpress"],
    },
	{
      id: "doctolib",
      name: "Doctolib",
      description: "Reprise de fonctionnalité de l'application Doctolib",
      images: [docto1, docto2],
	  content: "Ce projet universitaire implique la recréation simplifiée de Doctolib dans un cadre d'apprentissage. Il met en pratique la manipulation de base de données avec la méthode CRUD et l'utilisation du modèle MVC. L'application permet aux utilisateurs de gérer leurs rendez-vous médicaux, offrant des fonctionnalités de création, lecture, mise à jour et suppression de rendez-vous. Ce projet vise à renforcer la compréhension des concepts clés de développement Web tout en fournissant une expérience pratique dans la construction d'applications fonctionnelles.",
	  techno : ["Code Igniter", "PHP", "MySQL"],
    },
	{
      id: "btd",
      name: "BTD Multiservices 76",
      description: "Création d'un site pour une entreprise d'import/export",
      images: [btd1, btd2],
	  content: "Ce projet personnel vise à créer un site Web WordPress pour promouvoir une entreprise d'import/export. Le site met en avant les services, l'histoire et les valeurs de l'entreprise, et inclut une galerie de produits ainsi qu'un formulaire de contact. Ce travail développe une présence en ligne pour l'entreprise et fournit une expérience pratique en création de sites Web professionnels.",
	  techno : ["Wordpress"]
    },
	{
      id: "escape",
      name: "The Escape",
      description: "Réalisation d'un jeu en 3D sur les backrooms",
      images: [niv1, niv2],
	  content: "Ce gros projet universitaire consiste à développer un jeu en 3D et réalité virtuelle sur le thème des Backrooms, utilisant Unity et C#. Il offre une expérience immersive dans un monde labyrinthique à explorer et à survivre, combinant graphismes avancés et gameplay en VR. Ce travail met en pratique des compétences en programmation, design de jeu, et optimisation de performances, préparant les étudiants à des carrières dans le développement de jeux et contenus VR.",
	  techno : ["Unity", "C#"]
    },
	{
      id: "dashboard",
      name: "dashboard",
      description: "Création de l'UI d'un dashboard sur Figma",
      images: [dashboard1],
	  content: "Ce projet universitaire consiste à concevoir l'interface utilisateur d'un dashboard en utilisant l'auto-layout de Figma. L'objectif est de créer un design responsive et intuitif, adapté à divers usages. Les étudiants explorent les fonctionnalités d'auto-layout pour des composants UI flexibles, tout en intégrant une navigation aisée et des outils d'analyse visuelle. Ce travail pratique renforce les compétences en design UI/UX sur Figma.",
	  techno : ["Figma"]
    }
  ];

  /**
	 * @type {any}
	 */
  let selectedProject;

  function handleShowDetails(event) {
  const projectId = event.detail; // Assurez-vous que vous récupérez bien l'ID du projet ici
  selectedProject = projects.find(p => p.id === projectId);
}

  const handleCloseDetails = () => {
    selectedProject = null;
  };

</script>

<div class="flex flex-col items-center justify-center min-h-screen bg-black text-white">
	<Menu/>
	<div class="min-h-screen flex justify-center items-center text-center z-0" id="accueil">
		<div class="relative z-50">
			<h1 class="text-7xl font-bold">
				Salut <span class="text-blue-500 inline-block animate-bounce">🙋‍♀️</span> Je suis Esther
			</h1>

			<p
				class=" uppercase text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-pink-500 to-blue-500"
			>
				Futur développeuse web
			</p>
		</div>
		<div class=" absolute right-10 z-0">
			<img src="" alt="" class="" />
		</div>
	</div>
	<div class="min-h-screen min-w-full flex justify-center items-center text-center" id="apropos">
		<div class="flex items-center mb-10">
			<div class="ml-4">
				<h2 class="text-6xl font-bold text-center mb-6">
					<span class="outline-title">A</span><br />PROPOS
				</h2>
				<div class="flex justify-center">
					<p class="text-center w-2/3">
						Salut ! Je suis Esther, une étudiante passionnée par le développement web. Après trois
						ans d'expérience au sein du BUT MMI d'elbeuf, je me lance dans un MBA pour devenir développeuse full
						stack.<br />
						L'UX/UI m'intéresse aussi particulièrement car j'apprécie rendre les interfaces intuitives pour
						les utilisateurs.<br />
						Je suis polyvalente et je suis déterminée à m'adapter à tous les défis pour
						devenir une développeuse web compétente et flexible.
					</p>
				</div>
				<a href="https://drive.google.com/file/d/17OyVUQKg66vqcbiZ8KWYVtfjeEwurfUK/view?usp=sharing"><p class="text-2xl p-3 font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">MON CV !</p></a>
			</div>
		</div>

		<div class="flex flex-col justify-center items-center">
			<h2 class="text-6xl font-bold text-center mb-6">
				<span class="outline-title">OUTILS</span><br />TECHNOLOGIES
			</h2>
			<div class="flex flex-wrap justify-center w-2/3">
				{#each technologies as tech}
					<div class=" rounded-2xl p-3 m-2 flex items-center justify-center bg-white">
						<span class="text-black text-sm font-bold">{tech}</span>
					</div>
				{/each}
			</div>
		</div>
	</div>
	<div class="min-h-screen flex flex-col justify-center items-center text-center" id="portfolio">
		<h1 class="text-7xl font-bold text-center mb-6">
			<span class="outline-title">TRAVAUX</span><br /> PORTFOLIO
		</h1>
		<div class="flex mt-10">
			<ProjetCard
				projectId="covid"
				projectName="COVID-19"
				projectDescription="Réalisation d'un dashboard en PHP"
				imageUrl={covid}
				on:showDetails={handleShowDetails}
			/>
			<ProjetCard
				projectId="ar"
				projectName="Augmented Reality"
				projectDescription="CMS d'un évènement au Chai à Vin de Rouen"
				imageUrl={AR}
				on:showDetails={handleShowDetails}
			/>
			<ProjetCard
				projectId="doctolib"
				projectName="Doctolib"
				projectDescription="Réalisation de fonctionnalité de Doctolib avec CodeIgniter"
				imageUrl={Docto}
				on:showDetails={handleShowDetails}
			/>
		</div>
		<div class="flex mt-10">
			<ProjetCard
				projectId="btd"
				projectName="BTD Multiservices 76"
				projectDescription="Création d'un site pour une entreprise d'import/export"
				imageUrl={BTD}
				on:showDetails={handleShowDetails}
			/>
			<ProjetCard
				projectId="escape"
				projectName="The Escape"
				projectDescription="Réalisation d'un jeu 3D avec Unity et C#"
				imageUrl={Escape}
				on:showDetails={handleShowDetails}
			/>
			<ProjetCard
				projectId="dashboard"
				projectName="Dashboard"
				projectDescription="Création de l'UI d'un dashboard sur Figma"
				imageUrl={Dashboard}
				on:showDetails={handleShowDetails}
			/>

			{#if selectedProject}
  			<ProjectDetails projectDetails={selectedProject} on:toggleDetails={handleCloseDetails}/>
			{/if}
		</div>
		
	</div>
	
	<div class="min-h-screen flex flex-col justify-center items-center text-center" id="contact">
		<h1 class="text-7xl font-bold text-center mb-6">
			<span class="outline-title">MES</span><br /> CONTACT
		</h1>
		<div class="mt-10">
			<a href="mailto:estheramegnisse@outlook.fr" class="text-6xl hover:text-gray-200 "><i class="fas fa-envelope text-5xl"></i> estheramegnisse@outlook.fr</a>
			<div class="mt-20">
			  <a href="https://github.com/Ehr7" class="text-6xl p-5 hover:text-gray-200"><i class="fab fa-github text-5xl"></i></a>
			  <a href="https://www.linkedin.com/in/esther-amegnisse/" class="text-6xl ml-4 p-5 hover:text-gray-200"><i class="fab fa-linkedin text-5xl"></i></a>
			</div>
		  </div>
	</div>
</div>
<style>
	.outline-title {
		color: black;
		text-shadow:
			1px 1px 0 white,
			-1px -1px 0 white,
			1px -1px 0 white,
			-1px 1px 0 white,
			1px 1px 0 white;
	}


</style>
