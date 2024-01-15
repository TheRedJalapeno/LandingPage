document.addEventListener("DOMContentLoaded", function() {
    var lookupTable = {
        "Aceroofrepair.com": {
            "description": "AceRoofRepair.com is the ultimate destination for professional roofing services. Specializing in high-quality, durable roof repairs, this domain is perfectly tailored for businesses excelling in roofing solutions. With a strong focus on SEO, AceRoofRepair.com ensures your services rank high in search engine results, connecting you with homeowners and businesses in urgent need of reliable roof repairs. Secure this domain to elevate your online presence and become the go-to expert in roof repair services."
        },
        "Asimovsfolly.com": {
            "description": "AsimovsFolly.com offers a unique and intriguing domain name, ideal for science fiction enthusiasts, writers, or technology forums. Inspired by the legendary Isaac Asimov, this domain resonates with creativity and futuristic ideas. It's a perfect fit for a blog, discussion forum, or an online community focused on science fiction, robotics, and AI. Enhance your SEO potential with AsimovsFolly.com and connect with a passionate audience eager for content that explores the realms of imagination and technological advancements."
        },
        "Atomizly.com": {
            "description": "Atomizly.com is a cutting-edge domain name that speaks to innovation and modern technology. Ideal for businesses in the tech industry, startups focusing on nanotechnology, or digital transformation services, this domain provides a unique branding opportunity. With its SEO-friendly nature, Atomizly.com ensures your business stands out in search engine results, attracting tech-savvy customers and industry leaders looking for groundbreaking solutions and services. Embrace the future of technology with Atomizly.com and position your business at the forefront of innovation."
        },
        "hackensackdecks.com": {
            "description": "Discover the potential of HackensackDecks.com, a prime domain for businesses specializing in deck construction and design in Hackensack. Ideal for SEO, this domain connects you with customers seeking quality decking solutions."
        },
        "lincolnparkdecks.com": {
            "description": "LincolnParkDecks.com offers a unique opportunity for deck service providers in Lincoln Park. This domain is perfect for enhancing your online visibility and reaching homeowners looking for exceptional deck services."
        },
        "renohousecleaning.com": {
            "description": "RenoHouseCleaning.com is the go-to domain for house cleaning services in Reno. Ideal for SEO, it promises high visibility and connects you directly with clients seeking professional cleaning solutions."
        },
        "growyourstream.com": {
            "description": "GrowYourStream.com is an exceptional domain for Twitch streamers and content creators looking to expand their audience. This SEO-friendly domain is a gateway to increasing your online presence and viewership."
        },
        "CBDwillhelp.com": {
            "description": "CBDwillHelp.com is a premium domain, perfect for businesses in the CBD industry. With its SEO potential, it's an invaluable tool for connecting with customers seeking reliable CBD products and information."
        },
        "floridafue.com": {
            "description": "FloridaFUE.com is a top-tier domain for Follicular Unit Extraction services in Florida. This domain ensures high SEO visibility, connecting you with clients looking for advanced hair restoration solutions."
        },
        "newhairorlando.com": {
            "description": "NewHairOrlando.com, a premium domain, is perfect for hair restoration and transplant services in Orlando. It offers exceptional SEO advantages for businesses seeking to boost their online presence."
        },
        "southfloridaFUE.com": {
            "description": "This premium domain, SouthFloridaFUE.com, is available for purchase. It's ideal for hair restoration clinics in South Florida, offering unparalleled SEO benefits and connecting you with clients seeking FUE treatments."
        },
        "forroofers.com": {
            "description": "ForRoofers.com is an exclusive domain for roofing professionals. This domain provides exceptional SEO leverage, connecting roofing services with homeowners in need of quality roofing solutions."
        },
        "freekg.com": {
            "description": "FreeKg.com offers a unique branding opportunity for businesses in the weight loss or fitness industry. This catchy, SEO-friendly domain is perfect for attracting clients seeking health and fitness solutions."
        },
        "makeweddingplans.com": {
            "description": "MakeWeddingPlans.com is the ideal domain for wedding planning services. Its SEO-friendly nature ensures high visibility for businesses helping couples create their dream wedding experience."
        },
        "manhattanwinevault.com": {
            "description": "ManhattanWineVault.com is a premium domain for wine storage and connoisseur services in Manhattan. Perfect for SEO, it connects wine enthusiasts with specialized storage solutions and exclusive events."
        },
        "floridafoodfestival.com": {
            "description": "Capture the essence of culinary delights with FloridaFoodFestival.com, a prime domain for showcasing food festivals in Florida. Ideal for SEO, it connects foodies with the best gastronomic events."
        },
        "batonrougedivorcelawyers.com": {
            "description": "BatonRougeDivorceLawyers.com is an optimal domain for legal professionals specializing in divorce law in Baton Rouge. Enhance your online presence and SEO to connect with clients during crucial times."
        },
        "newyorkbuy.com": {
            "description": "NewYorkBuy.com offers an unparalleled opportunity for e-commerce and retail businesses in New York. This domain is perfect for maximizing SEO and reaching a vast audience of potential buyers."
        },
        "newyorkrentalcar.com": {
            "description": "NewYorkRentalCar.com is the go-to domain for car rental services in New York, offering high SEO potential and connecting businesses with travelers and locals needing rental vehicles."
        },
        "roofersreno.com": {
            "description": "RoofersReno.com is a dedicated domain for roofing professionals in Reno. It provides a powerful SEO platform to connect with homeowners and businesses in need of quality roofing services."
        },
        "rooferstockton.com": {
            "description": "RooferStockton.com is a premier domain for roofing services in Stockton. This domain ensures high visibility and SEO effectiveness, connecting roofers with a broad customer base."
        },
        "rototillerservice.com": {
            "description": "RototillerService.com is a niche domain perfect for gardening and landscaping businesses. With excellent SEO potential, it connects you with clients seeking professional rototilling services."
        },
        "shanghaimansions.com": {
            "description": "ShanghaiMansions.com is a luxurious domain for real estate in Shanghai, offering exceptional SEO benefits to connect upscale properties with discerning buyers and investors."
        },
        "sohottt.com": {
            "description": "SoHottt.com is a catchy, trendy domain ideal for fashion, beauty, or lifestyle businesses. Its memorable name offers great SEO potential to attract a young, stylish audience."
        },
        "stdominicschool.org": {
            "description": "StDominicSchool.org is a prime domain for educational institutions, particularly for a school named St. Dominic. It's perfect for enhancing online presence and SEO for educational services and resources."
        },
        "streamergrowth.com": {
            "description": "StreamerGrowth.com is an essential domain for Twitch streamers and content creators focused on growth. This SEO-optimized domain connects you with resources and audiences to boost your streaming career."
        },
        "streamergrowthservices.com": {
            "description": "StreamerGrowthServices.com is a targeted domain for businesses offering growth strategies to streamers. Ideal for SEO, it connects service providers with streamers aiming to expand their reach."
        },
        "texascomicon.com": {
            "description": "TexasComicon.com is a standout domain for comic convention organizers in Texas. With strong SEO potential, it's ideal for promoting events and connecting with the comic-loving community."
        },
        "tortugaliquors.com": {
            "description": "TortugaLiquors.com is a premium domain for liquor stores or brands, especially with a tropical or Caribbean theme. Excellent for SEO, it attracts customers seeking unique and quality spirits."
        },
        "uppercrumbs.com": {
            "description": "UpperCrumbs.com offers a unique branding opportunity for gourmet bakeries or high-end food businesses. With its catchy name and SEO potential, it's perfect for attracting a discerning clientele."
        },
        "valleyacuradealers.com": {
            "description": "ValleyAcuraDealers.com is an optimal domain for Acura dealerships in valley regions. Offering significant SEO benefits, it connects dealers with buyers looking for luxury cars in the valley area."
        },
        "veronicasbridal.com": {
            "description": "VeronicasBridal.com is an ideal domain for a bridal shop or wedding services. It offers excellent SEO potential to reach brides-to-be seeking elegant wedding solutions."
        }
    };        

  // Function to get query parameter value
  function getQueryParam(param) {
    var queryParams = new URLSearchParams(window.location.search);
    return queryParams.get(param);
  }
  
  // Check for 'domain' in query parameters
  var domainQueryParam = getQueryParam('domain');
  
  // Determine the current domain for display
  var currentDomain = domainQueryParam ? domainQueryParam.toLowerCase() : window.location.hostname.toLowerCase();
  
  // Handle local testing without specific domain
  if (!currentDomain || currentDomain === "localhost" || currentDomain.startsWith("192.168")) {
    currentDomain = "TexasComicon.com";
  }
  
  // Check if domain is in lookup table
  var data = lookupTable[currentDomain] || {
    "description": "Interested in this domain? Contact us for more information."
  };
  

  // Set title for site
  var title = currentDomain + " is for sale";
  

  // Set Sedo Link
  var sedoBaseURL = "https://sedo.com/search/?keyword=";
  var sedoLink = sedoBaseURL + encodeURIComponent(currentDomain) + "&synonyms=false&special_inventory=1";
  var sedoAnchor = document.getElementById("sedo-link");
  sedoAnchor.setAttribute('href', sedoLink);

  
  // Variable insertion for each Domain and Description
  document.title = title;
  document.getElementById("domain-title").textContent = title;
  document.getElementById("domain-description").textContent = data.description;
  
});
