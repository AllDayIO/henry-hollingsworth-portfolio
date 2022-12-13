const name = 'Henry Hollingsworth';
const email = 'henry@allday.io';
const links = {
	chat: {
		text: 'Schedule a Chat',
		url: 'https://calendly.com/allday/30min'
	},
	linkedIn: 'https://www.linkedin.com/in/henryhollingsworth/',
	resume:
		'https://res.cloudinary.com/kenjones/image/upload/v1670906178/henry-hollingsworth/Henry_Hollingsworth_resume_v1.pdf', // If placing in the static dir, use /resume/YOUR_RESUME.pdf.  Otherwise any old URL will do.
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

const bio = `<p class="font-serif text-2xl lg:text-4xl font-base leading-tight">I am a web consultant and <strong>producer of personalized online customer experiences</strong> (CX). My expertise in user experience (UX), design systems, development frameworks, and brand marketing growth strategies helping businesses develop a strong foundation to sacle. <strong>After 12 years in web, I'm ready to collaborate & innovate with a unified team & company.</strong></p><p class="text-xl lg:text-2xl text-gray/70 leading-normal">Bridge the gap between technology, operations, and business growth through collaborative solutions, support initiatives, and hyper-growth efforts. Experienced in entrepreneurial business leadership focusing on driving organizational optimization and growth. Provides expert recommendations for organizations on user experience success, brand design goals, and profitable digital strategies. </p>`;
const cloudinaryConfig = {
	cloudName: 'kenjones',
	folder: 'henry-hollingsworth' // leave blank if no folder was used
};
const logoImage = {
	src: 'henry-1',
	alt: name
};
const bioImages = [
	{ src: 'henry-selfie', alt: name },
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
						<h4 class="text-xl font-medium italic">Co-Founder | Director, Web Strategy & UX</h4>
						
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
						<h4 class="text-xl font-medium italic">Designer/Developer/Marketer</h4>
						
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
							<span class="font-bold">Paradise Advertising</span> (St. Pete, Fl.)
							- Agency
						</h3>
						<h4 class="text-xl font-medium italic">Digital Manager / Social Media Manager - 2013 - 2014<br />
						Interactive / Public Relations Coordinator - 2012 - 2013</h4>
						
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
				</div>
				button: {
					url: 'https://res.cloudinary.com/kenjones/image/upload/v1670906178/henry-hollingsworth/Henry_Hollingsworth_resume_v1.pdf',
					text: 'View Resume'
						}
				`;
				
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
				src: 'pcs-sitemap',
				alt: 'PCS Sitemap',
				title: 'Sitemap',
				isBrowserPreview: false
			},
			{
				src: 'pcs-wireframes',
				alt: 'PCS wireframes',
				title: 'Wireframes',
				isBrowserPreview: true
			},
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
		shortDescription: `A national commercial builder selected our team to connect / amplify its online presence and reflect the quality of their work with some for the nation's most impressive buildings. 
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
		slug: 'tampa-dunkin',
		name: 'Tampa Dunkin’ Donuts',
		mainImage: {
			src: 'tampa-dd-homepage',
			alt: 'Tampa Dunkinn Homepage',
			isBrowserPreview: true
		},
		images: [
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
			},
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
				src: 'dunkin-cms',
				alt: 'custom cms development',
				title: 'Custom CMS',
				isBrowserPreview: true
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
		slug: 'red-ventures',
		name: 'Red Ventures (Blog & Careers Site)',
		mainImage: {
			src: 'rv-blog',
			alt: 'Red Ventures Blog',
			isBrowserPreview: true
		},
		images: [
			{
				src: 'red-ventures-blog',
				alt: 'Blog Wireframes',
				title: 'Wireframes',
				isBrowserPreview: false
			},
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
		shortDescription: `The international technology marketing powerhouse, Red Ventures, contracted us to create their custom Blog & Careers site to help attract quality team members and new business.`,
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
				src: 'fly-usa-sitemap',
				alt: 'Fly Sitemap',
				title: 'Sitemap',
				isBrowserPreview: false
			},
			{
				src: 'flyusa-booking-wireframespng',
				alt: 'FlyUSA Booking Tool',
				title: 'FlyUSA Booking Tool',
				isBrowserPreview: true
			},
			{
				src: 'flyusa-screenwireframes',
				alt: 'FlyUSA Wireframes',
				title: 'FlyUSA Screen Wireframes',
				isBrowserPreview: true
			},
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
		shortDescription: `A national charter plane broker reached out to us this year to help elevate their brand & online customer experience design to resonate with their affluent audience.`,
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
				src: 'daily-hangar-sitemap',
				alt: 'Daily Hangar Sitemap',
				title: 'Sitemap',
				isBrowserPreview: false
			},
			{
				src: 'daily-hangar-wireframes',
				alt: 'Daily Hangar Wireframes',
				title: 'Wireframes',
				isBrowserPreview: false
			},
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
			}
		],
		shortDescription: `A Denver start-up partnered with my team to concept & create an industry-breaking website platform for the aviation industry, modeled after Airbnb, for pilots & charters to rent hangar-space around the U.S. Through this rental-payment-platform, we created 4 user-experience-levels, dashboards & custom filtering systems to facilitate the Searching & Booking journey for pilots & hangar-hosts for hundreds of different plane-sizes.`,
		longDescription: `<p>A start-up in Denver, CO partnered with my team to concept & create an industry-breaking website platform for the aviation industry, modeled after Airbnb, for pilots & charters to rent hangar-space at Regional Airports around the U.S. Through this rental-payment-platform, we created 4 user-experience-levels, dashboards & custom filtering systems to facilitate the Searching & Booking journey for pilots & hangar-hosts for hundreds of different plane-sizes. </p>

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
				src: 'allpoint-wireframes',
				alt: 'All Point Retail Wireframes',
				title: 'Employment Page',
				isBrowserPreview: true
			},
			{
				src: 'allpoint-homepage',
				alt: 'All Point Retail Homepage',
				title: 'Homepage',
				isBrowserPreview: true
			}
		],
		shortDescription: `All Point Retail provides end-to-end technology & managed services for retail companies, and enlisted us to help shake-up their online brand presence in the technology design space. `,
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
		shortDescription: `Jivey is the first application to harness word-of-mouth marketing and while this project is still attracting the right investors, it has made quite a splash for both businesses & sales professionals.`,
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
				src: 'TPC-Admin_Dashboard',
				alt: 'TPC Member Portal',
				title: 'TPC Member Portal Dashboard',
				isBrowserPreview: true
			},
			{
				src: 'TPC-Admin_Directory',
				alt: 'Member Directory',
				title: 'Member Directory',
				isBrowserPreview: false
			},
			{
				src: 'TPC_Admin_-_Donate',
				alt: 'The Propeller Club Member Portal',
				title: 'Member Donation',
				isBrowserPreview: true
			}
		],
		shortDescription: `The Propeller Club (TPC) is an international network of businesses / individuals in the maritime industry. Last year the largest TPC chapter in the U.S., Port Tampa, reached out to us with an interest in revamping its online presence to have more of a member focus and providing resources to get members/volunteers involved.`,
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
				<li>Gated Content Subscription Platform Development</li>
				<li>Website & Platform Support / Growth </li>
			</ul>
		</p>` // can be html
	},
	{
		slug: 'swift-delivery',
		name: 'Boom Delivery',
		mainImage: {
			src: 'swift-1',
			alt: 'Boom Delivery',
			isBrowserPreview: false
		},
		images: [
			{
				src: 'swift-wireframes',
				alt: 'Boom Delivery',
				title: '',
				isBrowserPreview: false
			},
			{
				src: 'swift-1',
				alt: 'Boom Delivery',
				title: '',
				isBrowserPreview: false
			},
			{
				src: 'swift-2',
				alt: 'Boom Delivery',
				title: '',
				isBrowserPreview: false
			},
			{
				src: 'swift-3',
				alt: 'Boom Delivery',
				title: '',
				isBrowserPreview: false
			},
			{
				src: 'swift-4',
				alt: 'Boom Delivery',
				title: '',
				isBrowserPreview: false
			},
			{
				src: 'swift-5',
				alt: 'Boom Delivery',
				title: '',
				isBrowserPreview: false
			},
			{
				src: 'swift-6',
				alt: 'Boom Delivery',
				title: '',
				isBrowserPreview: false
			},
			{
				src: 'swift-7',
				alt: 'Boom Delivery',
				title: '',
				isBrowserPreview: false
			}
		],
		shortDescription: `In an ongoing client-partnership with a cannabis delivery company in Washington, D.C., the client approached us with an idea for a delivery platform that collectively supported the many delivery companies in the D.C. area. Within a week, I had a plan in place to develop this custom web-based delivery platform that included a unique feature for customers to order with any delivery service in the area through this web-app. `,
		longDescription: `<p>In an ongoing client-partnership with a cannabis delivery company in Washington, D.C., the client approached us with an idea for a delivery platform that collectively supported the many delivery companies in the D.C. area. Within a week, I had a plan in place to develop this custom web-based delivery platform that included a unique feature for customers to order with any delivery service in the area through this web-app. From concept to launch, my team and I developed the branding, execution plan, CX wireframes, UX design system, and the interactive web-app to facilitate real-time order requests & deliveries for the D.C. area. Despite a successful round of Beta testing, inner-business political issues dissolved our partnership and we decided not to proceed with growing this new company. While we don't get to watch this company flourish, it was an incredible journey observing an idea with a clear vision go from concept to creation. </p>

		<p><span class="font-bold">User Experience:</span>
			<ul>
				<li>Quick access to start order, navigate menu, and request delivery </li>
				<li>Successful orders pair a delivery person, their details, and a countdownt to delivery</li>
				<li>Unique user experience & Dashboard for delivery companies to manage their details and track orders / revenue </li>
				<li>Custom SuperAdmin to manage all companies, customers, products, and more </li>
			</ul>
		</p>
		<p><span class="font-bold">Web Services:</span>
			<ul>
				<li>Branding </li>
				<li>System Architecture</li>
				<li>UX Design System </li>
				<li>PWA JS Framework </li>
				<li>Custom Frontend Development</li>
				<li>Server-side Platform Development</li>
				<li>Beta testing for companies & customers </li> 
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
			url: 'https://www.cabinetchic.com/',
			text: 'View Live Site'
		},
		images: [
			{
				src: 'cabinet-chic-sitemap',
				alt: 'Cabinet Chic Site Map',
				title: 'Site Map',
				isBrowserPreview: false
			},
			{
				src: 'hcab-sitemap',
				alt: 'Cabinetry Site Map',
				title: 'Custom Cabinetry Userflow',
				isBrowserPreview: false
			},
			{
				src: 'hcab-wireframes',
				alt: 'Cabinetry Wireframes',
				title: 'Custom Cabinetry Wireframes',
				isBrowserPreview: false
			},
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
			}
		],
		shortDescription: `The Cabinet Chic is a custom cabinetry company based in Tampa, Florida, with a focus on high-end personalized built-ins and wanted to create a website that reflected her quality of work. After two years with a new website, last year website visitors increased by 119%, new visitors by 130%, and returning visitors by 134%, confirming the reliable customer experience.`,
		longDescription: `<p>The Cabinet Chic is a custom cabinetry company based in Tampa, Florida, with a focus on high-end personalized built-ins. The goal was to take the outdated brochure-based website and transform it into a brand marketing website that reflects the quality and personalization of their work. Speaking directly to the target audience, this optimized website takes prospective customers on a visual journey to filter their experience and create a vision for their home updates. Through the UX design system, SEO integration & content marketing, Over the last year, website visitors have increased by 119%, new visitors by 130%, and returning visitors by 134%, confirming a reliable customer experience.</p>
		
		<p><span class="font-bold">User Experience:</span>
			<ul>
				<li>Website becomes visual resource for prospective customers to assemble design ideas</li>
				<li>Accessible filters to personalize the experience for each customer</li>
				<li>Interconnected dynamic Galleries & Case Studies for design inspiration</li>
				<li>Dynamic blog & lead generation funnels to convert curious visitors into customers</li>
			</ul>
		</p>
		<p><span class="font-bold">Web Services:</span>
			<ul>
				<li>Sitemap / USerflow</li>
				<li>Wireframe Prototyping </li>
				<li>Webflow Design Development</li>
				<li>SEO & Copywriting</li>
				<li>Ongoing Support / Growth</li> 
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
