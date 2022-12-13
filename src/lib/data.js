const name = 'Henry Hollingsworth';
const email = 'henry@allday.io';
const links = {
	chat: {
		text: 'Schedule a Chat',
		url: 'https://calendly.com/allday/30min'
	},
	linkedIn: 'https://www.linkedin.com/in/kenjazzyjones/',
	resume:
		'https://res.cloudinary.com/kenjones/image/upload/v1668494839/kenjones.pizza/Ken-Jones-Resume.pdf', // If placing in the static dir, use /resume/YOUR_RESUME.pdf.  Otherwise any old URL will do.
	menu: {
		linkedIn: 'https://www.linkedin.com/in/henryhollingsworth/'
	}
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

const bio = `<p class="font-serif text-2xl lg:text-4xl font-base leading-tight">I am a web consultant and producer of personalized online experiences that resonate with their target audience. My expertise in user experience, design systems, and brand marketing growth strategies help businesses develop a strong foundation to scale. After 12 years in web, I'm ready to collaborate & innovate with a unified team & company.</p><p class="text-xl lg:text-2xl text-gray/70 leading-normal">Bridge the gap between technology, operations, and business growth through collaborative solutions, support initiatives, and hyper-growth efforts. Experienced in entrepreneurial business leadership focusing on driving organizational optimization and growth. Provides expert recommendations for organizations on user experience success, brand design goals, and profitable digital strategies. </p>`;
const cloudinaryConfig = {
	cloudName: 'kenjones',
	folder: 'henry-hollingsworth' // leave blank if no folder was used
};
const logoImage = {
	src: 'henry-1',
	alt: name
};
const bioImages = [
	{ src: 'henry-1', alt: name },
	{ src: 'onewheel-hen', alt: name },
	{ src: 'henry-denver', alt: name }
];
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

		mainImage: {
			src: 'pcs', // Name from Cloudinary
			alt: 'PCS Homepage',
			isBrowserPreview: true
		},
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
			},
			{
				src: 'pcs-sitemap',
				alt: 'PCS Sitemap',
				title: 'Sitemap',
				isBrowserPreview: false
			},
			{
				src: 'pcs-wireframes',
				alt: 'PCS wireframes',
				title: 'Wireframes',
				isBrowserPreview: false
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
		</p>`, // can be html
		button: {
			url: 'https://pcscompanies.com',
			text: 'View Live Site'
		}
	},
	{
		slug: 'red-ventures',
		name: 'Red Ventures (Blog & Careers Site)',
		mainImage: {
			src: 'rv-blog',
			alt: 'Red Ventures Blog',
			isBrowserPreview: true
		},
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
			},
			{
				src: 'red-ventures-blog',
				alt: 'Blog Wireframes',
				title: 'Wireframes',
				isBrowserPreview: false
			}
		],
		shortDescription: `Custom Wordpress blog and PHP/GreenHouse API careers site for Red Ventures.`,
		longDescription: `<p>I've worked with Red Ventures a handful of times.  This set of projects contained a Blog and a Careers site.  The Blog is is a custom Wordpress build, with the goal creating a more editorial feeling experience.  The Careers site is a custom PHP build tied tot he Greenhouse.io API.</p>` // can be html
	},

	{
		slug: 'fly-usa',
		name: 'Fly USA',
		mainImage: {
			src: 'flyusa-homepage',
			alt: 'Fly USA',
			isBrowserPreview: true
		},
		images: [
			{
				src: 'flyusa-homepage',
				alt: 'Fly USA',
				title: 'Homepage',
				isBrowserPreview: true
			},
			{
				src: 'fly-usa-sitemap',
				alt: 'Fly Sitemap',
				title: 'Sitemap',
				isBrowserPreview: false
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
		mainImage: {
			src: 'dailyhangar-homepage',
			alt: 'Daily Hangar Homepage',
			isBrowserPreview: true
		},
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
				title: 'Site Map',
				isBrowserPreview: true
			},
			{
				src: 'daily-hangar-sitemap',
				alt: 'Daily Hangar Sitemap',
				title: 'Sitemap',
				isBrowserPreview: false
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
	},
	{
		slug: 'tampa-dunkin',
		name: 'Tampa Dunkin’ Donuts',
		mainImage: {
			src: 'tampa-dd-homepage',
			alt: 'Tampa Dunkinn Homepage',
			isBrowserPreview: true
		},
		images: [
			{
				src: 'tampa-dd-homepage',
				alt: 'Tampa Dunkin’ Homepage',
				title: 'Homepage',
				isBrowserPreview: true
			},
			{
				src: 'tampa-dd-employment',
				alt: 'Employment Page',
				title: 'Employment Page',
				isBrowserPreview: true
			},
			{
				src: 'dunkin-sitemap',
				alt: 'Tampa Dunkin’ Sitemap',
				title: 'Sitemap',
				isBrowserPreview: false
			},
			{
				src: 'dunkin-wireframes',
				alt: 'Tampa Dunkin’ wireframes',
				title: 'Wireframes',
				isBrowserPreview: false
			}
		],
		shortDescription: `Last year, we created a website for Dunkin' and their locations in Tampa Bay that included a location-library and was a funnel for new employee applications. In the first two months, they received nearly 1,000  applicants through the new online job application form.`,
		longDescription: `<p>Last year, we created a website for Dunkin' and their locations in Tampa Bay that included a location-library and was a funnel for new employee applications. In the first two months, they received nearly 1,000  applicants through the new online job application form.</p>

		<p><span class="font-bold">Web Services:</span>
			<ul>
				<li>Sitemap Userflow </li>
				<li>UX Wireframes </li>
				<li>Custom Design System</li>
				<li>JS Frontend Development</li>
				<li>Custom CMS </li>
				<li>Ongoing Support</li>
			</ul>
		</p>`, // can be html
		button: {
			url: 'https://tampadd.com',
			text: 'View Live Site'
		}
	},
	{
		slug: 'allpoint-retail',
		name: 'All Point Retail',
		mainImage: {
			src: 'allpoint-homepage',
			alt: 'All Point Retail Homepage',
			isBrowserPreview: true
		},
		button: {
			url: 'https://www.allpointretail.com/',
			text: 'View Live Site'
		},
		images: [
			{
				src: 'allpoint-homepage',
				alt: 'All Point Retail Homepage',
				title: 'Homepage',
				isBrowserPreview: true
			},
			{
				src: 'allpoint-wireframes',
				alt: 'All Point Retail Wireframes',
				title: 'Employment Page',
				isBrowserPreview: true
			}
		],
		shortDescription: `All Point Retail provides end-to-end technology & managed services for retail companies, and enlisted us to help shake-up their brand in the technology design space. We created a customer experience design that reflects their skater vibes & fresh approach to a business's technology needs along with a dynamic journey through the website that builds trust and funnels prospective customer's to a consultation form. After the relaunch with a new Homepage design, form conversions have increased by over 35%, month over month. `,
		longDescription: `<p>All Point Retail provides end-to-end technology & managed services for retail companies, and enlisted us to help shake-up their brand in the technology design space. We created a customer experience design that reflects their skater vibes & fresh approach to a business's technology needs along with a dynamic journey through the website that builds trust and funnels prospective customer's to a consultation form. After the relaunch with a new Homepage design, form conversions have increased by over 35%, month over month. </p>

		<p><span class="font-bold">Web Services:</span>
			<ul>
				<li>Website Strategy & Userflow </li>
				<li>CX Wireframes</li>
				<li>UX Design System </li>
				<li>Frontend & CMS Development </li>
				<li>Website Support / Growth </li>
			</ul>
		</p>` // can be html
	},
	{
		slug: 'jivey',
		name: 'Jivey',
		mainImage: {
			src: 'jivey-sitemap',
			alt: 'Jivey Sitemap',
			isBrowserPreview: false
		},
		images: [
			{
				src: 'jivey-sitemap',
				alt: 'Jive',
				title: 'Sitemap',
				isBrowserPreview: false
			},
			{
				src: 'jivey-wireframes',
				alt: 'Jivey',
				title: 'Wireframes',
				isBrowserPreview: false
			}
		],
		shortDescription: `Jivey is the first application to harness word-of-mouth marketing. ­­­This web & mobile app allows businesses to create campaigns for their products/services through the Jivey's community (salesforce, influencers, family, friends) connecting people in need with a reliable network of trusted professional services. Unlike Google AdWords or PPC, Jivey's interconnected platform allows for in-person referrals, increasing the conversion rate of successful sales.`,
		longDescription: `<p>Jivey is the first application to harness word-of-mouth marketing. ­­­This web & mobile app allows businesses to create campaigns for their products/services through the Jivey's community (salesforce, influencers, family, friends) connecting people in need with a reliable network of trusted professional services. Unlike Google AdWords or PPC, Jivey's interconnected platform allows for in-person referrals, increasing the conversion rate of successful sales.</p><p>As one of the original co-founders of the start-up, I had the opportunity to help develop the branding, app features, and system architecture for the end-user experience.  Once these items were packaged up, we had several meetings with prospective investors who saw the value, and we came close to an agreement with multiple angel investors. Now that the platform has made it into a functional Beta, the Jivey team feels that the platform would flourish once integrated into a B2B or B2C infrastructure to serve a more focused purpose.</p>

		<!--<p><span class="font-bold">Web Services:</span>
			<ul>
				<li>Website Strategy & Userflow </li>
				<li>CX Wireframes</li>
				<li>UX Design System </li>
				<li>Frontend & CMS Development </li>
				<li>Website Support / Growth </li>
			</ul>
		</p>-->` // can be html
	},
	{
		slug: 'the-propeller-club',
		name: 'The Propeller Club',
		mainImage: {
			src: 'tpc-homepage',
			alt: 'Homepage',
			isBrowserPreview: true
		},
		button: {
			url: 'https://www.propellerclubtampa.com/',
			text: 'View Live Site'
		},
		images: [
			{
				src: 'tpc-homepage',
				alt: 'The Propeller Club',
				title: 'Homepage',
				isBrowserPreview: true
			},
			{
				src: 'tpc-education',
				alt: 'The Propeller Club',
				title: 'Local Outreach Page',
				isBrowserPreview: true
			},
			{
				src: 'tpc-sitemap',
				alt: 'The Propeller Club',
				title: 'Site Map',
				isBrowserPreview: false
			},
			{
				src: 'tpc-website-wireframes',
				alt: 'The Propeller Club',
				title: 'Wireframes',
				isBrowserPreview: false
			},
			{
				src: 'tpc-member-portal',
				alt: 'The Propeller Club Member Portal',
				title: 'Member Portal',
				isBrowserPreview: false
			}
		],
		shortDescription: `The Propeller Club (TPC) is an international network of businesses / individuals in the maritime industry. Last year the largest TPC chapter in the U.S., Port Tampa, reached out to us with an interest in revamping its online presence to have more of a member focus and providing resources to get members/volunteers involved. After redesigning their brand website to include integrated marketing strategies, an event calendar, and a resource center, we created an interactive member portal to facilitate networking, messaging, donations, and directories for their 750+ members. `,
		longDescription: `<p>The Propeller Club (TPC) is an international network of businesses / individuals in the maritime industry. Last year the largest TPC chapter in the U.S., Port Tampa, reached out to us with an interest in revamping its online presence to have more of a member focus and providing resources to get members/volunteers involved. After redesigning their brand website to include integrated marketing strategies, an event calendar, and a resource center, we created an interactive member portal to facilitate networking, messaging, donations, and directories for their 750+ members. </p>

		<p><span class="font-bold">User Experience:</span>
			<ul>
				<li>The website's event & news areas will increase member awareness as they engage through social media and get involved; </li>
				<li>find industry resources, volunteer / educational outreach opportunities through the email newsletter, webpages and local SEO strategies; </li>
				<li>an email automation series & submitted applications will drive members to their interactive portal to get involved. </li>
				<li>continue optimizing the visibility of the TPC website through ongoing content, integrated marketing & SEO strategies. </li>
			</ul>
		</p>
		<p><span class="font-bold">Web Services:</span>
			<ul>
				<li>Website Strategy & Userflow </li>
				<li>CX Wireframes</li>
				<li>UX Design System </li>
				<li>Frontend & CMS Development </li>
				<li>Website Support / Growth </li>
			</ul>
		</p>` // can be html
	},
	{
		slug: 'swift-delivery',
		name: 'Swift Delivery',
		mainImage: {
			src: 'swift-1',
			alt: 'Swift Delivery',
			isBrowserPreview: false
		},
		images: [
			{
				src: 'swift-1',
				alt: 'Swift Delivery',
				title: '',
				isBrowserPreview: false
			},
			{
				src: 'swift-2',
				alt: 'Swift Delivery',
				title: '',
				isBrowserPreview: false
			},
			{
				src: 'swift-3',
				alt: 'Swift Delivery',
				title: '',
				isBrowserPreview: false
			},
			{
				src: 'swift-4',
				alt: 'Swift Delivery',
				title: '',
				isBrowserPreview: false
			},
			{
				src: 'swift-5',
				alt: 'Swift Delivery',
				title: '',
				isBrowserPreview: false
			},
			{
				src: 'swift-6',
				alt: 'Swift Delivery',
				title: '',
				isBrowserPreview: false
			},
			{
				src: 'swift-7',
				alt: 'Swift Delivery',
				title: '',
				isBrowserPreview: false
			},
			{
				src: 'swift-wireframes',
				alt: 'Swift Delivery',
				title: '',
				isBrowserPreview: false
			}
		],
		shortDescription: `The Propeller Club (TPC) is an international network of businesses / individuals in the maritime industry. Last year the largest TPC chapter in the U.S., Port Tampa, reached out to us with an interest in revamping its online presence to have more of a member focus and providing resources to get members/volunteers involved. After redesigning their brand website to include integrated marketing strategies, an event calendar, and a resource center, we created an interactive member portal to facilitate networking, messaging, donations, and directories for their 750+ members. `,
		longDescription: `<p>The Propeller Club (TPC) is an international network of businesses / individuals in the maritime industry. Last year the largest TPC chapter in the U.S., Port Tampa, reached out to us with an interest in revamping its online presence to have more of a member focus and providing resources to get members/volunteers involved. After redesigning their brand website to include integrated marketing strategies, an event calendar, and a resource center, we created an interactive member portal to facilitate networking, messaging, donations, and directories for their 750+ members. </p>

		<p><span class="font-bold">User Experience:</span>
			<ul>
				<li>The website's event & news areas will increase member awareness as they engage through social media and get involved; </li>
				<li>find industry resources, volunteer / educational outreach opportunities through the email newsletter, webpages and local SEO strategies; </li>
				<li>an email automation series & submitted applications will drive members to their interactive portal to get involved. </li>
				<li>continue optimizing the visibility of the TPC website through ongoing content, integrated marketing & SEO strategies. </li>
			</ul>
		</p>
		<p><span class="font-bold">Web Services:</span>
			<ul>
				<li>Website Strategy & Userflow </li>
				<li>CX Wireframes</li>
				<li>UX Design System </li>
				<li>Frontend & CMS Development </li>
				<li>Website Support / Growth </li>
			</ul>
		</p>` // can be html
	},
	{
		slug: 'cabinet-chic',
		name: 'Cabinet Chic',
		mainImage: {
			src: 'cabinet-chic-homepage',
			alt: 'Cabinet Chic Homepage',
			isBrowserPreview: true
		},
		button: {
			url: 'https://www.allpointretail.com/',
			text: 'View Live Site'
		},
		images: [
			{
				src: 'cabinet-chic-homepage',
				alt: 'Cabinet Chic Homepage',
				title: 'Homepage',
				isBrowserPreview: true
			},
			{
				src: 'cabinet-chic-services',
				alt: 'Cabinet Chic Services',
				title: 'Services',
				isBrowserPreview: true
			},
			{
				src: 'cabinet-chic-sitemap',
				alt: 'Cabinet Chic Site Map',
				title: 'Site Map',
				isBrowserPreview: false
			}
		],
		shortDescription: `The Cabinet Chic is a custom cabinetry company based in Tampa, Florida, with a focus on high-end personalized built-ins. The goal was to take the outdated brochure-based website and transform it into a brand marketing website that reflects the quality and personalization of their work. Speaking directly to the target audience, this optimized website takes prospective customers on a visual journey to filter their experience and create a vision for their home updates. Through the UX design system, SEO integration & content marketing, Over the last year, website visitors have increased by 119%, new visitors by 130%, and returning visitors by 134%, confirming a reliable customer experience.`,
		longDescription: `<p>The Cabinet Chic is a custom cabinetry company based in Tampa, Florida, with a focus on high-end personalized built-ins. The goal was to take the outdated brochure-based website and transform it into a brand marketing website that reflects the quality and personalization of their work. Speaking directly to the target audience, this optimized website takes prospective customers on a visual journey to filter their experience and create a vision for their home updates. Through the UX design system, SEO integration & content marketing, Over the last year, website visitors have increased by 119%, new visitors by 130%, and returning visitors by 134%, confirming a reliable customer experience.</p>` // can be html
	}
];
const cta = {
	heading: 'I’m currently looking for new opportunities',
	text: `After a successful 7-year stint running a web agency, I'm ready for my next challenge. With over 12 years of experience in branding, design, UX, web development, and digital media, I feel ready to partner with a company I'm passionate about to unlock our next level together.` // Can be HTML
};
const copyright = 'Henry Hollingsworth';
const meta = {
	favicon: 'henry-1',
	OgImage: 'henry-1',
	title: `${name} | Architect, Digital Marketer`,
	description: `${name}'s portfolio website.  Email him at: ${email}`,
	siteName: `Henry Hollingsworth`,
	twitterUsername: ''
};
const sourceCode = {
	showCode: false,
	link: 'https://github.com/kenjonespizza/kenjones.pizza'
};
const posthog = {
	key: ''
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
	posthog,
	sourceCode
};
