const name = 'Henry Hollingsworth';
const email = 'henry@allday.io';
const links = {
	chat: {
		text: 'Schedule a Chat',
		url: 'https://calendly.com/kenjonespizza/'
	},
	linkedIn: 'https://www.linkedin.com/in/kenjazzyjones/',
	resume:
		'https://res.cloudinary.com/kenjones/image/upload/v1668494839/kenjones.pizza/Ken-Jones-Resume.pdf' // If placing in the static dir, use /resume/YOUR_RESUME.pdf.  Otherwise any old URL will do.
};
const titles = [
	'Explorer',
	'Solutionist ',
	'Deep Thinker',
	'Conceptor ',
	'Designer',
	'Producer',
	'Nature Enthusiast',
	'One-Wheeler',
	'Collaborator',
	'Web Architect',
	'Digital Marketer',
	'Your Hype Man '
];

const bio = `<p class="font-serif text-3xl lg:text-5xl font-light leading-tight">
I am a web consultant and producer of personalized online experiences that resonate with their target audience. My expertise in user experience, design systems, and brand marketing growth strategies help businesses develop a strong foundation to scale. After 12 years in web, I'm ready to collaborate & innovate with a unified team & company.
</p>
<p class="text-xl lg:text-2xl text-gray/70 leading-normal">
Bridge the gap between technology, operations, and business growth through collaborative solutions, support initiatives, and hyper-growth efforts. Experienced in entrepreneurial business leadership focusing on driving organizational optimization and growth. Provides expert recommendations for organizations on user experience success, brand design goals, and profitable digital strategies. 
</p>`;
const cloudinaryConfig = {
	cloudName: 'kenjones',
	folder: 'henry-hollingsworth' // leave blank if no folder was used
};
const logoImage = {
	src: 'henry-1',
	alt: name
};
const bioImages = [{ src: 'henry-1', alt: name }];
const resume = `<!-- Entry -->
<div class="flex flex-col md:flex-row justify-start gap-6">
					<div class="-translate-x-3 md:translate-x-0 min-w-[200px] text-gray/70 text-sm">
						<time datetime="2008-02-14 20:00">October 2015</time> -
						<time datetime="2008-02-14 20:00">Present</time>
					</div>
					<div class="-mt-2 md:mt-auto prose prose-sm">
						<h3 class="font-serif text-2xl leading-none mb-1	">
							<span class="font-bold">AllDay</span> (Remote).
						</h3>
						<h4 class="text-xl font-medium italic">Director, Web Strategy & UX  Co-Founder</h4>
						
					</div>
				</div>
				<!-- Entry -->
				<div class="flex flex-col md:flex-row justify-start gap-6">
					<div class="-translate-x-3 md:translate-x-0 min-w-[200px] text-gray/70 text-sm">
						<time datetime="2008-02-14 20:00">2014 </time> -
						<time datetime="2008-02-14 20:00">2015</time>
					</div>
					<div class="-mt-2 md:mt-auto prose prose-sm">
						<h3 class="font-serif text-2xl leading-none mb-1	">
							<span class="font-bold">Vology</span> (Tampa, FL)
						</h3>
						<h4 class="text-xl font-medium italic">Designer/Engineer</h4>
						
					</div>
				</div>
				<!-- Entry -->
				<div class="flex flex-col md:flex-row justify-start gap-6">
					<div class="-translate-x-3 md:translate-x-0 min-w-[200px] text-gray/70 text-sm">
						<time datetime="2008-02-14 20:00">2014</time> -
						<time datetime="2008-02-14 20:00">2015</time>
					</div>
					<div class="-mt-2 md:mt-auto prose prose-sm">
						<h3 class="font-serif text-2xl leading-none mb-1	">
							<span class="font-bold">Freelance</span> (Tampa, FL & Denver, CO) 
						</h3>
						<h4 class="text-xl font-medium italic">Front-End Website Developer</h4>
						
					</div>
				</div>
				<!-- Entry -->
				<div class="flex flex-col md:flex-row justify-start gap-6">
					<div class="-translate-x-3 md:translate-x-0 min-w-[200px] text-gray/70 text-sm">
						<time datetime="2008-02-14 20:00">2012</time> -
						<time datetime="2008-02-14 20:00">2014</time>
					</div>
					<div class="-mt-2 md:mt-auto prose prose-sm">
						<h3 class="font-serif text-2xl leading-none mb-1	">
							<span class="font-bold">Paradise Advertising and Marketing</span> (St. Petersburg, Fl.)
							- Agency
						</h3>
						<h4 class="text-xl font-medium italic">Digital Manager / Social Media Manager - 2013 - 2014</h4>
						<h4 class="text-xl font-medium italic">Interactive / Public Relations Coordinator - 2012 - 2013</h4>
						
					</div>
				</div>
				<!-- Entry -->
				<div class="flex flex-col md:flex-row justify-start gap-6">
					<div class="-translate-x-3 md:translate-x-0 min-w-[200px] text-gray/70 text-sm">
						Early Career
					</div>
					<div class="-mt-2 md:mt-auto prose prose-sm">
					<h4 class="text-lg font-serif">
							<span class="font-bold">Trifecta Team, LLC</span> – PR/Web Consultant<br>
							<span class="font-bold">Tampa Bay Buccaneers</span> – PR Intern / Training Camp Assistant <br>
							<span class="font-bold">The Tennis Channel</span> – Production Intern <br>
							<span class="font-bold">Pressure Wash South Tampa</span> – Owner/Operator
						</h4>
					</div>
				</div>`;
const caseStudies = [
	{
		slug: 'pcs',
		name: 'PCS Companies',
		mainImage: 'pcs',
		images: [
			{
				src: 'pcs',
				alt: 'PCS Homepage',
				title: 'Blog Homepage',
				isBrowserPreview: true
			},
			{
				src: 'pcs-locations',
				alt: 'PCS Locations',
				title: 'Blog Post',
				isBrowserPreview: true
			},
			{
				src: 'and-estimate',
				alt: '&estimate Homepage',
				title: 'Careers Homepage',
				isBrowserPreview: true
			},
			{
				src: 'and-build',
				alt: '&build Homepage',
				title: 'Creatives Page',
				isBrowserPreview: true
			}
		],
		shortDescription: `A national commercial builder selected our team to connect / amplify its online presence and reflect the quality of their work with some for the nation's most impressive buildings. These three service-websites are tethered together through a thoughtful navigation mega-menu, shared UI Component library, and a Monorepo system to facilitate updates across the three connected sites. Each website has its own integrated marketing & SEO strategy to generate individualized growth. 
		`,
		longDescription: `<p>A national commercial builder selected our team to connect / amplify its online presence and reflect the quality of their work with some for the nation's most impressive buildings. These three service-websites are tethered together through a thoughtful navigation mega-menu, shared UI Component library, and a Monorepo system to facilitate updates across the three connected sites. Each website has its own integrated marketing & SEO strategy to generate individualized growth.</p>
		
		<p><span class="font-bold">Web Services:</span>
			<ul>
				<li>3 websites on a Monorepo </li>
				<li>Website Strategy & Userflow </li>
				<li>CX Wireframes for each website</li>
				<li>UX Design System & Component Libray </li>
				<li>Frontend & CMS Development </li>
				<li>Website Support / Growth for each website</li>
			</ul>
		</p>` // can be html
	},
	{
		slug: 'red-ventures',
		name: 'Red Ventures (Blog & Careers Site)',
		mainImage: 'rv-blog',
		images: [
			{
				src: 'rv-blog',
				alt: 'Red Ventures Blog',
				title: 'Blog Homepage',
				isBrowserPreview: true
			},
			{
				src: 'rv-blog-post',
				alt: 'Red Ventures Careers',
				title: 'Blog Post',
				isBrowserPreview: true
			},
			{
				src: 'rv-careers',
				alt: 'Red Ventures Careers',
				title: 'Careers Homepage',
				isBrowserPreview: true
			},
			{
				src: 'rv-creatives',
				alt: 'Red Ventures Creatives',
				title: 'Creatives Page',
				isBrowserPreview: true
			}
		],
		shortDescription: `Custom Wordpress blog and PHP/GreenHouse API careers site for Red Ventures.`,
		longDescription: `<p>I've worked with Red Ventures a handful of times.  This set of projects contained a Blog and a Careers site.  The Blog is is a custom Wordpress build, with the goal creating a more editorial feeling experience.  The Careers site is a custom PHP build tied tot he Greenhouse.io API.</p>` // can be html
	},

	{
		slug: 'fly-usa',
		name: 'Fly USA',
		mainImage: 'flyusa-homepage',
		images: [
			{
				src: 'flyusa-homepage',
				alt: 'Fly USA',
				title: 'Homepage',
				isBrowserPreview: true
			},
			{
				src: 'flyusa-booking',
				alt: 'Fly USA',
				title: 'Booking Step 1',
				isBrowserPreview: true
			},
			{
				src: 'flyusa-about',
				alt: 'Fly About',
				title: 'About Page',
				isBrowserPreview: true
			}
		],
		shortDescription: `A national charter plane broker reached out to us this year to help elevate their brand & online customer experience design to resonate with their affluent audience. We architected a personalized design system for their 28-page infrastructure with modular layouts to scale the design as the company grows. In addition, we create a fluid Booking Tool experience to help facilitate a seamless conversion process for qualified customers.`,
		longDescription: `<p>A national charter plane broker reached out to us this year to help elevate their brand & online customer experience design to resonate with their affluent audience. We architected a personalized design system for their 28-page infrastructure with modular layouts to scale the design as the company grows. In addition, we create a fluid Booking Tool experience to help facilitate a seamless conversion process for qualified customers.</p>

		<p><span class="font-bold">Web Services:</span>
			<ul>
				<li>Website Strategy & Userflow </li>
				<li>CX Wireframes</li>
				<li>UX Design System & Technical Designs</li>
				<li>Frontend & CMS Development </li>
				<li>Website Support / Growth </li>
			</ul>
		</p>`, // can be html
		button: {
			url: 'https://flyusa.com',
			text: 'View Live Site'
		}
	},
	{
		slug: 'daily-hangar',
		name: 'Daily Hangar',
		mainImage: 'dailyhangar-homepage',
		images: [
			{
				src: 'dailyhangar-homepage',
				alt: 'Daily Hangar Homepage',
				title: 'Homepage',
				isBrowserPreview: true
			},
			{
				src: 'dailyhangar-listing',
				alt: 'Daily Hangar Listing',
				title: 'Hangar Listing',
				isBrowserPreview: true
			},
			{
				src: 'dailyhangar-map',
				alt: 'Daily Hangar map',
				title: 'Daily Hangar map/Listings',
				isBrowserPreview: true
			}
		],
		shortDescription: `A start-up in Denver, CO partnered with my team to concept & create an industry-breaking website platform for the aviation industry, modeled after Airbnb, for pilots & charters to rent hangar-space at Regional Airports around the U.S. Through this rental-payment-platform, we created 4 user-experience-levels, dashboards & custom filtering systems to facilitate the Searching & Booking journey for pilots & hangar-hosts for hundreds of different plane-sizes. 
		Web Services`,
		longDescription: `<p>A start-up in Denver, CO partnered with my team to concept & create an industry-breaking website platform for the aviation industry, modeled after Airbnb, for pilots & charters to rent hangar-space at Regional Airports around the U.S. Through this rental-payment-platform, we created 4 user-experience-levels, dashboards & custom filtering systems to facilitate the Searching & Booking journey for pilots & hangar-hosts for hundreds of different plane-sizes. 
		Web Services</p>

		<p><span class="font-bold">Web Services:</span>
			<ul>
				<li>Concepting, Prototyping & Planning</li>
				<li>Custom UX | UI Web Design</li>
				<li>Custom Frontend Development</li>
				<li>Custom CMS</li>
				<li>Gated access to 4 user-types </li>
				<li>Custom Platform Development</li>
				<li>Custom SuperAdmin Panel </li>
				<li>Automated CX emails & email template design</li>
				<li>Maintenance / Support</li>
			</ul>
		</p>` // can be html
	}
];
const cta = {
	heading: 'I’m currently looking for new opportunities',
	text: `After a successful 7-year stint running a web agency, I'm ready for my next challenge. With over 12 years of experience in branding, design, UX, web development, and digital media, I feel ready to partner with a company I'm passionate about to unlock our next level together.` // Can be HTML
};
const copyright = 'Henry Hollingsworth';
const meta = {
	favicon: '1',
	OgImage: '1',
	title: `${name} | Web designer, developer, specialist`,
	description: `${name}'s portfolio website.  Email him at: ${email}`,
	siteName: `KenJonesPizza`,
	twitterUsername: 'kenjonespizza'
};
const posthog = {
	key: 'phc_w7KCAXCdTTEQBYQeQMmDhzPBECMCIovl19E4mVIiIT2'
};

export const data = {
	name,
	email,
	titles,
	bio,
	links,
	logoImage,
	resume,
	bioImages,
	meta,
	caseStudies,
	cloudinaryConfig,
	cta,
	copyright,
	posthog
};
