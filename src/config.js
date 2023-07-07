window.testCallback = () => {
    
    let startTime;
    const duration = 10000;
  
    const frame = (time) => {
      if (!startTime) startTime = time;
      const animationPhase = (time - startTime) / duration;
  
      // Reduce the visible length of the line by using a line-gradient to cutoff the line
      // animationPhase is a value between 0 and 1 that reprents the progress of the animation
      map.setPaintProperty("my-linestring-line", "line-gradient", [
        "step",
        ["line-progress"],
        "red",
        animationPhase,
        "rgba(0, 0, 0, 0)"
      ]);
  
      if (animationPhase > 1) {
        return;
      }
      window.requestAnimationFrame(frame);
    };
  
    window.requestAnimationFrame(frame);
  
  }

var imageRoot = 'https://raw.githubusercontent.com/alroth/trailsrebooted-2023-storymap/main/src/images'
var config = {
    style: 'mapbox://styles/wta/cleiym1xm001i01nvjkh1dtse',
    accessToken: 'pk.eyJ1Ijoid3RhIiwiYSI6ImNqOXJkbGdlNjY5ajIzM21xNm5uZXk3eWUifQ.padg8NGbni9aK8jaLiuTuA',
    showMarkers: false,
    markerColor: '',
    inset: false,
    theme: 'light',
    use3dTerrain: true,
    auto: false,
    title: 'Trails Rebooted',
    subtitle: '',
    byline: '',
    footer: `WTA's <a href="https://www.wta.org/trailsrebooted">Trails Rebooted campaign</a> has been working since 2019 to support our most popular recreation areas. That means improving existing trails, championing the construction of new ones and helping hikers see the role they play in the future of trails. See what we've done so far, and what's on the horizon at wta.org/trailsrebooted.<br>`,
    chapters: [ { 
        id: 'intro',
        alignment: 'fully',
        hidden: false,
        title: "Making Washington's trails the best place to be",
        image: '',
        description: "WTA's Trails Rebooted campaign supports the state's popular recreation areas by improving existing trails, championing the construction of new ones and helping hikers see the role they play in the future of trails. See what that looks like on trails statewide.",
        location: {
            center: [-120.52187030948637, 47.38714096806013],
            zoom: 7.5,
            pitch: 0,
            bearing: 0
        },
        onChapterEnter: [
            {
                layer: 'spokaneprojects',
                opacity: 0
            },
            {
                layer: 'mplltraverse',
                opacity: 0
            },
            {
                layer: 'salteserr',
                opacity: 0
            },
            {
                layer: 'etterranch',
                opacity: 0
            },
            {
                layer: 'antoinepeak',
                opacity: 0
            },
            {
                layer: 'silver-star-trailheads',
                opacity: 0
            },
            {
                layer: 'wdfwambassadors',
                opacity: 0
            },
            {
                layer: 'norse-peak-wilderness',
                opacity: 0
            },
        ],
        onChapterExit: [
            {
                layer: 'spokaneprojects',
                opacity: 0.5
            },
            {
                layer: 'mplltraverse',
                opacity: 0.5
            },
            {
                layer: 'salteserr',
                opacity: 0.5
            },
            {
                layer: 'etterranch',
                opacity: 0.5
            },
            {
                layer: 'antoinepeak',
                opacity: 0.5
            },
            {
                layer: 'silver-star-trailheads',
                opacity: 0.5
            },
            {
                layer: 'wdfwambassadors',
                opacity: 0.5
            },
            {
                layer: 'norse-peak-wilderness',
                opacity: 0.5
            },
        ],
},
{ 
            id: 'spokaneoverview',
            alignment: 'left',
            title: 'New Trails Near Spokane',
            image: imageRoot + 'stumpremoval.png',
            description: 'For years, WTA has been building new trails near Spokane. Our recent projects include routes on Mica and Antoine Peaks and at the Saltese Uplands. Each trail built creates more opportunity for hikers to connect to greenspaces, like the 11.5 mile trail between Liberty Lake Regional Park and Mica Peak.',
            location: {
                center: [-117.23043961551326, 47.67155498313036],
                zoom: 12,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'easeTo',
            rotateAnimation: true,
             onChapterEnter: [
                {
                    layer: 'spokaneprojects',
                    opacity: 0.5
                },
                {
                    layer: 'mplltraverse',
                    opacity: 0.5
                },
                {
                    layer: 'salteserr',
                    opacity: 0.5
                },
                {
                    layer: 'etterranch',
                    opacity: 0.5
                },
                {
                    layer: 'antoinepeak',
                    opacity: 0.5
                },
                {
                    layer: 'silver-star-trailheads',
                    opacity: 0
                },
                {
                    layer: 'wdfwambassadors',
                    opacity: 0
                },
		        {
                    layer: 'MLH work locations',
                    opacity: 0
                },
                {
                    layer: 'norse-peak-wilderness',
                    opacity: 0
                },
            ],
            onChapterExit: [
                {
                    layer: 'spokaneprojects',
                    opacity: 0.5
                },
                {
                    layer: 'mplltraverse',
                    opacity: 1
                },
                {
                    layer: 'salteserr',
                    opacity: 0.5
                },
                {
                    layer: 'etterranch',
                    opacity: 0.5
                },
                {
                    layer: 'antoinepeak',
                    opacity: 0.5
                },
                {
                    layer: 'silver-star-trailheads',
                    opacity: 0
                },
                {
                    layer: 'wdfwambassadors',
                    opacity: 0
                },
                {
                    layer: 'norse-peak-wilderness',
                    opacity: 0
                },
            ],
    },
    {
            id: 'micapeaktolibertylake',
            alignment: 'left',
            hidden: false,
            title: 'Case Study: Connecting Mica Peak to Liberty Lake',
            image: imageRoot + 'saltesefrommica.png',
            description: `The 11.5-mile California Creek Trail <a href="https://www.wta.org/go-hiking/hikes/mica-peak-to-liberty-lake-traverse">connects Mica Peak to Liberty Lake</a>. Atfter years of hiker advocacy and volunteer trail work, it <a href="https://www.wta.org/news/signpost/a-new-connection-near-spokane">opened in 2020</a>, giving the nearly 1 million people living in the Spokane Valley an opportunity to visit the headwaters of three major creek systems and to experience some rich elk habitat, all just 30 minutes from the city center.`,
            location: {
                center: [-117.13497427817258, 47.57476874082113],
                zoom: 15,
                pitch: 45,
                bearing: 0, 
            },
            mapAnimation: 'easeTo',
            onChapterEnter: [
                {
                    layer: 'spokaneprojects',
                    opacity: 0.5
                },
                {
                    layer: 'mplltraverse',
                    opacity: 1
                },
                {
                    layer: 'salteserr',
                    opacity: 0.5
                },
                {
                    layer: 'etterranch',
                    opacity: 0.5
                },
                {
                    layer: 'antoinepeak',
                    opacity: 0.5
                },
                {
                    layer: 'silver-star-trailheads',
                    opacity: 0
                },
                {
                    layer: 'wdfwambassadors',
                    opacity: 0
                },
		{
                    layer: 'MLH work locations',
                    opacity: 0
                },
                {
                    layer: 'norse-peak-wilderness',
                    opacity: 0
                },
            ],
            onChapterExit: [
                {
                    layer: 'spokaneprojects',
                    opacity: 0.5
                },
                {
                    layer: 'mplltraverse',
                    opacity: 1
                },
                {
                    layer: 'salteserr',
                    opacity: 1
                },
                {
                    layer: 'etterranch',
                    opacity: 0.5
                },
                {
                    layer: 'antoinepeak',
                    opacity: 0.5
                },
                {
                    layer: 'silver-star-trailheads',
                    opacity: 0
                },
                {
                    layer: 'wdfwambassadors',
                    opacity: 0
                },
		        {
                    layer: 'MLH work locations',
                    opacity: 0
                },
                {
                    layer: 'norse-peak-wilderness',
                    opacity: 0
                },
            ],
    },
    {       id: 'saltese',
            alignment: 'right',
            hidden: false,
            title: '',
            image: imageRoot + 'salteseflatshiker.png',
            description: "Connecting into the California Creek trail is the Saltese Ridge Trail, which joins the Mica Peak Traverse with the Saltese Uplands Conservation area, further extending hiking options in Spokane. <br>Well-built trail is especially important here, since the high desert is a sensitive environment.  The realignment WTA built in 2022 (orange zigzag) makes the trail longer-lasting, and helps visitors coexist with minimal impact with white-tailed deer, badger, coyote, bobcats, and birds of prey who call this area home.",
            location: {
                center: [-117.08738, 47.58801],
                zoom: 13.98,
                pitch: 43.93,
                bearing: 31.20
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            onChapterEnter: [
               
                {
                    layer: 'spokaneprojects',
                    opacity: 0.5
                },
                {
                    layer: 'mplltraverse',
                    opacity: 0.5
                },
                {
                    layer: 'salteserr',
                    opacity: 1
                },
                {
                    layer: 'etterranch',
                    opacity: 0.5
                },
                {
                    layer: 'antoinepeak',
                    opacity: 0.5
                },
                {
                    layer: 'silver-star-trailheads',
                    opacity: 0
                },
                {
                    layer: 'wdfwambassadors',
                    opacity: 0
                },
                {
                    layer: 'norse-peak-wilderness',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'spokaneprojects',
                    opacity: 0.5
                },
                {
                    layer: 'mplltraverse',
                    opacity: 0.5
                },
                {
                    layer: 'salteserr',
                    opacity: 0.5
                },
                {
                    layer: 'etterranch',
                    opacity: 0.5
                },
                {
                    layer: 'antoinepeak',
                    opacity: 0.5
                },
                {
                    layer: 'silver-star-trailheads',
                    opacity: 0
                },
                {
                    layer: 'wdfwambassadors',
                    opacity: 0
                },
		        {
                    layer: 'norse-peak-wilderness',
                    opacity: 0
                }
            ],
        },
        {
            id: 'antoinepeak',
            alignment: 'left',
            hidden: false,
            title: '2013 - Present: Creating Trails in a Local Conservation Area',
            image: imageRoot + 'antoinepeakview.jpeg',
            description: 'With fantastic views overlooking Liberty Lake, the Spokane Valley, and north to Mount Spokane and the Selkirks, Antoine Peak boasts a robust trail network thanks to investments here that have been under way since 2013. At first, WTA was working to help secure Antoine Peak as a place to recreate. Today, there are three different trailheads, each with several hike options stemming from them.',
            location: {
            center: [-117.18041, 47.71692],
            zoom: 13.98,
            pitch: 74.00,
            bearing: 0.00
            },
            mapAnimation: 'easeTo',
            rotateAnimation: true,
            onChapterEnter:[
               
                {
                    layer: 'spokaneprojects',
                    opacity: 0
                },
                {
                    layer: 'mplltraverse',
                    opacity: 0.5
                },
                {
                    layer: 'salteserr',
                    opacity: 0.5
                },
                {
                    layer: 'etterranch',
                    opacity: 1
                },
                {
                    layer: 'antoinepeak',
                    opacity: 1
                },
                {
                    layer: 'silver-star-trailheads',
                    opacity: 0
                },
                {
                    layer: 'wdfwambassadors',
                    opacity: 0
                },
                {
                    layer: 'norse-peak-wilderness',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'spokaneprojects',
                    opacity: 0.5
                },
                {
                    layer: 'mplltraverse',
                    opacity: 0.5
                },
                {
                    layer: 'salteserr',
                    opacity: 0.5
                },
                {
                    layer: 'etterranch',
                    opacity: 0.8
                },
                {
                    layer: 'antoinepeak',
                    opacity: 1
                },
                {
                    layer: 'silver-star-trailheads',
                    opacity: 0
                },
                {
                    layer: 'wdfwambassadors',
                    opacity: 0
                },
                {
                    layer: 'norse-peak-wilderness',
                    opacity: 0
                }
            ]
        },
        {
            id: 'etterranch',
            alignment: 'right',
            hidden: false,
            title: 'Many Hikes, One Trailhead',
            image: imageRoot + 'etterranch.png',
            description: 'Most recently, WTA has been working on the trails accessed from Brevier Road. Known as Etter Ranch, this Spokane Valley trailhead opened in 2021 and offers access to three trails: the Arrowleaf Trail, which connects to the Emerald Necklace Loop, and the Lost Apple Trail. Emerald Necklace is a great long day hike, while Lost Apple serves as a shorter and lower elevation option for visitors to enjoy year-round.',
            location: {
                center: [-117.17031, 47.70029],
                zoom: 15.18,
                pitch: 74.00,
                earing: -10.40
            },
            mapAnimation: 'easeTo',
            onChapterEnter:[
               
                {
                    layer: 'spokaneprojects',
                    opacity: 0.5
                },
                {
                    layer: 'mplltraverse',
                    opacity: 0.5
                },
                {
                    layer: 'salteserr',
                    opacity: 0.5
                },
                {
                    layer: 'etterranch',
                    opacity: 1
                },
                {
                    layer: 'antoinepeak',
                    opacity: 0.5
                },
                {
                    layer: 'silver-star-trailheads',
                    opacity: 0
                },
                {
                    layer: 'wdfwambassadors',
                    opacity: 0
                },
                {
                    layer: 'norse-peak-wilderness',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'spokaneprojects',
                    opacity: 0
                },
                {
                    layer: 'mplltraverse',
                    opacity: 0
                },
                {
                    layer: 'salteserr',
                    opacity: 0
                },
                {
                    layer: 'etterranch',
                    opacity: 0
                },
                {
                    layer: 'antoinepeak',
                    opacity: 0
                },
                {
                    layer: 'silver-star-trailheads',
                    opacity: 0
                },
                {
                    layer: 'wdfwambassadors',
                    opacity: 0
                },
                {
                    layer: 'norse-peak-wilderness',
                    opacity: 0
                }
            ]
        },
        {
            id: 'transition',
            alignment: 'center',
            hidden: false,
            title: "Let's Connect",
            image: imageRoot + 'silvershadow.png',
            description: `A cost-effective way to enhance a trail network is by <a href='https://www.wta.org/news/signpost/the-power-of-loops-connections'>adding connector trails to already-existing networks</a>. This helps meet Washington's increasing need for recreation options on tight budgets. We've done this on trail networks statewide, from Spokane, to <a href='https://www.wta.org/news/signpost/new-loops-new-hikes-new-views-in-the-columbia-river-gorge'>Lyle Cherry Orchard</a>, in the Gorge, to <a href='https://www.fox13seattle.com/video/1208910'>Little Mountain Park</a> in Mount Vernon and Silver Star Mountain in southwest Washington.`,
            location: {
                center: [-122.23228, 45.85334],
                zoom: 11.56,
                pitch: 4.00,
                bearing: 72.80
            },
            mapAnimation: 'flyTo',
            callback:'',
            onChapterEnter: [
               
                {
                    layer: 'spokaneprojects',
                    opacity: 0
                },
                {
                    layer: 'mplltraverse',
                    opacity: 0
                },
                {
                    layer: 'salteserr',
                    opacity: 0
                },
                {
                    layer: 'etterranch',
                    opacity: 0
                },
                {
                    layer: 'antoinepeak',
                    opacity: 0
                },
                {
                    layer: 'silver-star-trailheads',
                    opacity: 0.5
                },
                {
                    layer: 'wdfwambassadors',
                    opacity: 0
                },
                {
                    layer: 'norse-peak-wilderness',
                    opacity: 0
                }
            ],
                    onChapterExit: [
                {
                    layer: 'spokaneprojects',
                    opacity: 0
                },
                {
                    layer: 'mplltraverse',
                    opacity: 0
                },
                {
                    layer: 'salteserr',
                    opacity: 0
                },
                {
                    layer: 'etterranch',
                    opacity: 0
                },
                {
                    layer: 'antoinepeak',
                    opacity: 0
                },
                {
                    layer: 'silver-star-trailheads',
                    opacity: 1
                },
                {
                    layer: 'wdfwambassadors',
                    opacity: 0
                },
                {
                    layer: 'norse-peak-wilderness',
                    opacity: 0
                }
             ],
            },
{
            id: 'silverstarintro',
            alignment: 'left',
            hidden: false,
            title: '1990 - Present: Investing in Silver Star Recreation Area',
            image: imageRoot + 'silver star vista.png',
            description: `Just outside Battle Ground, the Silver Star area provides a fantastic area for hikers to experience wildflowers, a 5-volcano view, and a variety of trails.`,
            location: {
                ccenter: [-122.23884, 45.74586],
                zoom: 12.20,
                pitch: 72.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
               
                {
                    layer: 'spokaneprojects',
                    opacity: 0
                },
                {
                    layer: 'mplltraverse',
                    opacity: 0
                },
                {
                    layer: 'salteserr',
                    opacity: 0
                },
                {
                    layer: 'etterranch',
                    opacity: 0
                },
                {
                    layer: 'antoinepeak',
                    opacity: 0
                },
                {
                    layer: 'silver-star-trailheads',
                    opacity: 0
                },
                {
                    layer: 'wdfwambassadors',
                    opacity: 0
                },
                {
                    layer: 'norse-peak-wilderness',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'spokaneprojects',
                    opacity: 0
                },
                {
                    layer: 'mplltraverse',
                    opacity: 0
                },
                {
                    layer: 'salteserr',
                    opacity: 0
                },
                {
                    layer: 'etterranch',
                    opacity: 0
                },
                {
                    layer: 'antoinepeak',
                    opacity: 0
                },
                {
                    layer: 'silver-star-trailheads',
                    opacity: 0
                },
                {
                    layer: 'wdfwambassadors',
                    opacity: 0
                },
                {
                    layer: 'norse-peak-wilderness',
                    opacity: 0
                }
            ],
        },
        {
            id: 'appaloosa',
            alignment: 'left',
            hidden: false,
            title: 'Silver Star and Yacolt Burn State Forest',
            image: imageRoot + 'hidden falls.jpg',
            description: "Hikers understand the value of having a robust trail systems, and have advocated for trails in this area since the 1990s. This year, a<a href='https://www.wta.org/news/signpost/a-vision-for-the-future-of-silver-star-recreation-area'>a large group of stakeholders, inclduing tribes, the national forest, and recreationists, compiled an updated vision plan for Silver Star</a>. It takes into consideration a variety of priorities for the land, and will guide management in this area for years to come.",
            location: {
                center: [-122.24903, 45.78099],
                zoom: 11.55,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'easeTo',
            onChapterEnter: [
               
                {
                    layer: 'spokaneprojects',
                    opacity: 0
                },
                {
                    layer: 'mplltraverse',
                    opacity: 0
                },
                {
                    layer: 'salteserr',
                    opacity: 0
                },
                {
                    layer: 'etterranch',
                    opacity: 0
                },
                {
                    layer: 'antoinepeak',
                    opacity: 0
                },
                {
                    layer: 'silver-star-trailheads',
                    opacity: 1
                },
                {
                    layer: 'wdfwambassadors',
                    opacity: 0
                },
                {
                    layer: 'norse-peak-wilderness',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'spokaneprojects',
                    opacity: 0
                },
                {
                    layer: 'mplltraverse',
                    opacity: 0
                },
                {
                    layer: 'salteserr',
                    opacity: 0
                },
                {
                    layer: 'etterranch',
                    opacity: 0
                },
                {
                    layer: 'antoinepeak',
                    opacity: 0
                },
                {
                    layer: 'silver-star-trailheads',
                    opacity: 1
                },
                {
                    layer: 'wdfwambassadors',
                    opacity: 0
                },
                {
                    layer: 'norse-peak-wilderness',
                    opacity: 0
                }
            ],
        },
        {
            id: 'roadcaveat',
            alignment: 'right',
            hidden: false,
            title: '',
            image: imageRoot + 'caron4109.jpg',
            description: `One major issue that has stymied hikers for years in this area are the roads in Silver Star. People approaching from the west or the south report vehicular acrobatics or parking miles from the trailhead, opting to roadwalk rather than risk their car's suspension.`,
            location: {
                center: [-122.1910, 45.7423],
                zoom: 11,
                pitch: 0.00,
                bearing: 0
            },
            mapAnimation: 'easeTo',
            onChapterEnter: [
               
                {
                    layer: 'spokaneprojects',
                    opacity: 0
                },
                {
                    layer: 'mplltraverse',
                    opacity: 0
                },
                {
                    layer: 'salteserr',
                    opacity: 0
                },
                {
                    layer: 'etterranch',
                    opacity: 0
                },
                {
                    layer: 'antoinepeak',
                    opacity: 0
                },
                {
                    layer: 'silver-star-trailheads',
                    opacity: 0
                },
                {
                    layer: 'wdfwambassadors',
                    opacity: 0
                },
                {
                    layer: 'norse-peak-wilderness',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'spokaneprojects',
                    opacity: 0
                },
                {
                    layer: 'mplltraverse',
                    opacity: 0
                },
                {
                    layer: 'salteserr',
                    opacity: 0
                },
                {
                    layer: 'etterranch',
                    opacity: 0
                },
                {
                    layer: 'antoinepeak',
                    opacity: 0
                },
                {
                    layer: 'silver-star-trailheads',
                    opacity: 0
                },
                {
                    layer: 'wdfwambassadors',
                    opacity: 0
                },
                {
                    layer: 'norse-peak-wilderness',
                    opacity: 0
                }
            ],            
        },
        {
            id: 'bellsmountain',
            alignment: 'right',
            hidden: false,
            title: '',
            image: imageRoot + 'bellsmountaintrail.png',
            description: "Vehicular access is easier from the south. Visit the <a href='https://www.wta.org/go-hiking/hikes/bells-mt'>Bells Mountain Trail</a>, where this spring WTA work parties improved footing through a muddy area crews know as the Slip'N'Slide. The long trail provides access from Moulton Falls County Park and is a crucial connector for people to access the Yacolt Burn State Forest, which shares trails with Silver Star.",
            location: {
                center: [-122.39451041131447, 45.83264308646734],
                zoom: 13,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'easeTo',
            onChapterEnter: [
               
                {
                    layer: 'spokaneprojects',
                    opacity: 0
                },
                {
                    layer: 'mplltraverse',
                    opacity: 0
                },
                {
                    layer: 'salteserr',
                    opacity: 0
                },
                {
                    layer: 'etterranch',
                    opacity: 0
                },
                {
                    layer: 'antoinepeak',
                    opacity: 0
                },
                {
                    layer: 'silver-star-trailheads',
                    opacity: 1
                },
                {
                    layer: 'wdfwambassadors',
                    opacity: 0
                },
                {
                    layer: 'norse-peak-wilderness',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'spokaneprojects',
                    opacity: 0
                },
                {
                    layer: 'mplltraverse',
                    opacity: 0
                },
                {
                    layer: 'salteserr',
                    opacity: 0
                },
                {
                    layer: 'etterranch',
                    opacity: 0
                },
                {
                    layer: 'antoinepeak',
                    opacity: 0
                },
                {
                    layer: 'silver-star-trailheads',
                    opacity: 1
                },
                {
                    layer: 'wdfwambassadors',
                    opacity: 0
                },
                {
                    layer: 'norse-peak-wilderness',
                    opacity: 0
                },
            ],
        },
        {
            id: 'appaloosa',
            alignment: 'left',
            hidden: false,
            title: 'Case Study: Connector Trails Create Loops',
            image: imageRoot + '',
            description: "Also in Yacolt Burn is the <a href='https://www.wta.org/go-hiking/hikes/appaloosa-trail'>Appaloosa Trail</a> to Hidden Falls, a route WTA finished in 2021 with support from Back Country Horsemen of Washington. This trail makes a fantastic six-mile day hike in the forest, and links to the pre-existing Tarbell Trail. <br><br>WTA also built a connector to the Tarbell Trail on the other side of the State Forest called <a href='https://www.wta.org/go-hiking/hikes/silver-shadow-loop'>Silver Shadow</a>. This route created a 4.6-mile loop hike through a lovely open forest.",
            location: {
                center: [-122.32022, 45.76496],
                zoom: 16.15,
                pitch: 79.00,
                bearing: 78.40
            },
            mapAnimation: 'easeTo',
            onChapterEnter: [
               
                {
                    layer: 'spokaneprojects',
                    opacity: 0
                },
                {
                    layer: 'mplltraverse',
                    opacity: 0
                },
                {
                    layer: 'salteserr',
                    opacity: 0
                },
                {
                    layer: 'etterranch',
                    opacity: 0
                },
                {
                    layer: 'antoinepeak',
                    opacity: 0
                },
                {
                    layer: 'silver-star-trailheads',
                    opacity: 1
                },
                {
                    layer: 'wdfwambassadors',
                    opacity: 0
                },
                {
                    layer: 'norse-peak-wilderness',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'spokaneprojects',
                    opacity: 0
                },
                {
                    layer: 'mplltraverse',
                    opacity: 0
                },
                {
                    layer: 'salteserr',
                    opacity: 0
                },
                {
                    layer: 'etterranch',
                    opacity: 0
                },
                {
                    layer: 'antoinepeak',
                    opacity: 0
                },
                {
                    layer: 'silver-star-trailheads',
                    opacity: 1
                },
                {
                    layer: 'wdfwambassadors',
                    opacity: 0
                },
                {
                    layer: 'norse-peak-wilderness',
                    opacity: 0
                },
            ],
        },
        {
            id: 'bluffmountain',
            alignment: 'left',
            hidden: false,
            title: '2020 - 2023: Bluff Mountain Work',
            image: imageRoot + 'bluffmountainbcrt.jpg',
            description: "Past the Appaloosa Trail's connection with the Tarbell Trail, hikers can link into the Silver Star trail network. Silver Star is known for its views, as well as its more rugged trails. <br><br>Bluff Mountain requires plenty of maintenance; crew log out this trail annuallyafter winter storms so hikers can access the higher levels of the Silver Star area. This 2022 crew did a ton of work to restore access to this area. And in 2023, a journalist for The Columbian <a href='https://www.columbian.com/news/2023/jun/24/washington-trails-association-preserves-connection-in-clark-county-wild-spaces/'>joined a backcountry response team on this trail</a> to get a real taste of what trail work is like.",
            location: {
                center: [-122.19152, 45.74160],
                zoom: 13.92,
                pitch: 64.89,
                bearing: 0.00
            },
            mapAnimation: 'easeTo',
            rotateAnimation: true,
            onChapterEnter: [
               
                {
                    layer: 'spokaneprojects',
                    opacity: 0
                },
                {
                    layer: 'mplltraverse',
                    opacity: 0
                },
                {
                    layer: 'salteserr',
                    opacity: 0
                },
                {
                    layer: 'etterranch',
                    opacity: 0
                },
                {
                    layer: 'antoinepeak',
                    opacity: 0
                },
                {
                    layer: 'silver-star-trailheads',
                    opacity: 1
                },
                {
                    layer: 'wdfwambassadors',
                    opacity: 0
                },
                {
                    layer: 'norse-peak-wilderness',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'spokaneprojects',
                    opacity: 0
                },
                {
                    layer: 'mplltraverse',
                    opacity: 0
                },
                {
                    layer: 'salteserr',
                    opacity: 0
                },
                {
                    layer: 'etterranch',
                    opacity: 0
                },
                {
                    layer: 'antoinepeak',
                    opacity: 0
                },
                {
                    layer: 'silver-star-trailheads',
                    opacity: 1
                },
                {
                    layer: 'wdfwambassadors',
                    opacity: 0
                },
                {
                    layer: 'norse-peak-wilderness',
                    opacity: 0
                },
            ],
        },
        {
            id: 'silverstarwrapup',
            alignment: 'left',
            hidden: false,
            title: '',
            image: imageRoot + 'bluffbeforeandafter.png',
            description: "Supporting increasing hiking options is central to WTA's work. The newly-released vision plan ensures that sort of investment will continue into the future, which is especially important this year, since <a href='https://www.wta.org/news/signpost/know-before-you-go-trails-that-will-be-closed-this-summer'>construction or road washouts have closed a lot of popular trails throughout Washington</a>.",
            location: {
                center: [-122.30350, 45.78059],
                zoom: 12.42,
                pitch: 0.00,
                bearing: 18.40
            },
            mapAnimation: 'flyTo',
            callback: '',
            onChapterEnter: [
               
                {
                    layer: 'spokaneprojects',
                    opacity: 0
                },
                {
                    layer: 'mplltraverse',
                    opacity: 0
                },
                {
                    layer: 'salteserr',
                    opacity: 0
                },
                {
                    layer: 'etterranch',
                    opacity: 0
                },
                {
                    layer: 'antoinepeak',
                    opacity: 0
                },
                {
                    layer: 'silver-star-trailheads',
                    opacity: 1
                },
                {
                    layer: 'wdfwambassadors',
                    opacity: 0
                },
                {
                    layer: 'norse-peak-wilderness',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'spokaneprojects',
                    opacity: 0
                },
                {
                    layer: 'mplltraverse',
                    opacity: 0
                },
                {
                    layer: 'salteserr',
                    opacity: 0
                },
                {
                    layer: 'etterranch',
                    opacity: 0
                },
                {
                    layer: 'antoinepeak',
                    opacity: 0
                },
                {
                    layer: 'silver-star-trailheads',
                    opacity: 0.5
                },
                {
                    layer: 'wdfwambassadors',
                    opacity: 0
                },
                {
                    layer: 'norse-peak-wilderness',
                    opacity: 0
                },
            ],
        },
        {
            id: 'mlh',
            alignment: 'left',
            hidden: false,
            title: '2019 - Present: Focus on the Mountain Loop Highway',
            image: 'dozer.jpg',
            description: "With the 2020 passage of the Great American Outdoors Act (thanks in part to <a href='https://www.wta.org/news/signpost/gaoa-provides-vital-funding-for-public-lands'>advocacy from hikers like you</a>, the Forest Service began addressing maintenance backlogs statewide! This includes long overdue improvements to many trails on the Mountain Loop Highway. <br>While this does mean many popular trails will be closed for some of the summer, most of them will reopen in time for you to hike them, with the notable exception of Mount Pilchuck.",
            location: {
                center: [-121.97977, 48.14008],
                zoom: 10.13,
                pitch: 5.89,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            callback: '',
            onChapterEnter: [
               
                {
                    layer: 'spokaneprojects',
                    opacity: 0
                },
                {
                    layer: 'mplltraverse',
                    opacity: 0
                },
                {
                    layer: 'salteserr',
                    opacity: 0
                },
                {
                    layer: 'etterranch',
                    opacity: 0
                },
                {
                    layer: 'antoinepeak',
                    opacity: 0
                },
                {
                    layer: 'silver-star-trailheads',
                    opacity: 0
                },
                {
                    layer: 'wdfwambassadors',
                    opacity: 0
                },
                {
                    layer: 'norse-peak-wilderness',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'spokaneprojects',
                    opacity: 0
                },
                {
                    layer: 'mplltraverse',
                    opacity: 0.5
                },
                {
                    layer: 'salteserr',
                    opacity: 0
                },
                {
                    layer: 'etterranch',
                    opacity: 0
                },
                {
                    layer: 'antoinepeak',
                    opacity: 0
                },
                {
                    layer: 'silver-star-trailheads',
                    opacity: 0
                },
                {
                    layer: 'wdfwambassadors',
                    opacity: 0
                },
                {
                    layer: 'norse-peak-wilderness',
                    opacity: 0
                },
            ],
        },
        {
            id: 'pilchuck',
            alignment: 'right',
            hidden: false,
            title: 'Fixing the Roads',
            image: '',
            description: "The road to this extremely popular trail is notoriously awful. It's not unusual for the 7 miles from the Mountain Loop Highway to the trailhead to take 45 minutes or more. <br><br>But the closure for this hiking season means next year Forest Road 42 may be unrecognizable to those who have visited before. And that 7-mile drive might not take quite so long.",
            location: {
                center: [-121.75294, 48.06597],
                zoom: 13.10,
                pitch: 5.89,
                bearing: 0.00
            },
            mapAnimation: 'easeTo',
            onChapterEnter: [
               
                {
                    layer: 'spokaneprojects',
                    opacity: 0
                },
                {
                    layer: 'mplltraverse',
                    opacity: 0
                },
                {
                    layer: 'salteserr',
                    opacity: 0
                },
                {
                    layer: 'etterranch',
                    opacity: 0
                },
                {
                    layer: 'antoinepeak',
                    opacity: 0
                },
                {
                    layer: 'silver-star-trailheads',
                    opacity: 0
                },
                {
                    layer: 'wdfwambassadors',
                    opacity: 0
                },
                {
                    layer: 'norse-peak-wilderness',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'spokaneprojects',
                    opacity: 0
                },
                {
                    layer: 'mplltraverse',
                    opacity: 0
                },
                {
                    layer: 'salteserr',
                    opacity: 0
                },
                {
                    layer: 'etterranch',
                    opacity: 0
                },
                {
                    layer: 'antoinepeak',
                    opacity: 0
                },
                {
                    layer: 'silver-star-trailheads',
                    opacity: 0
                },
                {
                    layer: 'wdfwambassadors',
                    opacity: 0
                },
                {
                    layer: 'norse-peak-wilderness',
                    opacity: 0
                },
            ],
        },
        {
            id: 'ambassadorprograms',
            alignment: 'left',
            hidden: false,
            title: 'Friendly faces at trailheads',
            image: imageRoot + 'wtaselfie.jpg',
            description: "Rebooting Washington's trail system takes more than on-the-ground road and trail maintenance. It's about <a href='https://www.wta.org/go-outside/trail-smarts/nice-people-nice-hikes'>changing how hikers interact with the landscape, too.</a> <br>In recent years, ambassadors have been staffing trailheads in popular recreation areas, offering hikers advice about what to expect on trail, information about the area, even suggestions for other places to go if the trailhead is full.",
            location: {
                center: [-120.91816, 47.11753],
                zoom: 12.00,
                pitch: 19.50,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            onChapterEnter: [
               
                {
                    layer: 'spokaneprojects',
                    opacity: 0
                },
                {
                    layer: 'mplltraverse',
                    opacity: 0
                },
                {
                    layer: 'salteserr',
                    opacity: 0
                },
                {
                    layer: 'etterranch',
                    opacity: 0
                },
                {
                    layer: 'antoinepeak',
                    opacity: 0
                },
                {
                    layer: 'silver-star-trailheads',
                    opacity: 0
                },
                {
                    layer: 'wdfwambassadors',
                    opacity: 1
                },
                {
                    layer: 'norse-peak-wilderness',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'spokaneprojects',
                    opacity: 0
                },
                {
                    layer: 'mplltraverse',
                    opacity: 0
                },
                {
                    layer: 'salteserr',
                    opacity: 0
                },
                {
                    layer: 'etterranch',
                    opacity: 0
                },
                {
                    layer: 'antoinepeak',
                    opacity: 0
                },
                {
                    layer: 'silver-star-trailheads',
                    opacity: 0
                },
                {
                    layer: 'wdfwambassadors',
                    opacity: 1
                },
                {
                    layer: 'norse-peak-wilderness',
                    opacity: 0
                },
            ],
        },
        {
            id: 'mlhambassadors',
            alignment: 'center',
            hidden: false,
            title: 'Making Trail Smart Hikers',
            image: '',
            description: "Ambassadors also share our Trail Smarts in-person with Washington's hiking community. <a href='https://www.wta.org/go-outside/trail-smarts'>Trail Smarts</a> is how WTA shares information about hiking etiquette. We incorporate these into all our communications, including social media and newsletters, but ambassadors are some of the best at conveying concepts like Leave No Trace and responsible recreation to hikers heading out for the day.",
            location: {
                center: [-120.91816, 47.11753],
                zoom: 12.00,
                pitch: 19.50,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            onChapterEnter: [
               
                {
                    layer: 'spokaneprojects',
                    opacity: 0
                },
                {
                    layer: 'mplltraverse',
                    opacity: 0
                },
                {
                    layer: 'salteserr',
                    opacity: 0
                },
                {
                    layer: 'etterranch',
                    opacity: 0
                },
                {
                    layer: 'antoinepeak',
                    opacity: 0
                },
                {
                    layer: 'silver-star-trailheads',
                    opacity: 0
                },
                {
                    layer: 'wdfwambassadors',
                    opacity: 1
                },
                {
                    layer: 'norse-peak-wilderness',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'spokaneprojects',
                    opacity: 0
                },
                {
                    layer: 'mplltraverse',
                    opacity: 0
                },
                {
                    layer: 'salteserr',
                    opacity: 0
                },
                {
                    layer: 'etterranch',
                    opacity: 0
                },
                {
                    layer: 'antoinepeak',
                    opacity: 0
                },
                {
                    layer: 'silver-star-trailheads',
                    opacity: 0
                },
                {
                    layer: 'wdfwambassadors',
                    opacity: 1
                },
                {
                    layer: 'norse-peak-wilderness',
                    opacity: 0
                },
            ],
        },
        {
            id: 'wdfwambassadors',
            alignment: 'left',
            hidden: false,
            title: '2020 - Present: Past Success Seeds New Partnerships',
            image: imageRoot + 'hikeronpilchuck.png',
            description: "In 2021, we stationed ambassadors <a href='https://www.wta.org/news/signpost/q-a-with-steven-colson-for-trailhead-ambassador-program> at trailheads on the Mountain Loop Highway</a> and in Gothic Basin, as well as at trailheads in the Columbia River Gorge. This year, we're launching a <a href='https://www.wta.org/get-involved/outreach/wdfw-ambassadors'>program with the Washington Department of Fish and Wildlife </a> to staff six trailheads in Central Washington this summer. <br>Ambassador programs are a key part of Trails Rebooted, since they provide hikers with advice from trail pros right at the start of their day. In addition, they help hikers understand how <a href='https://www.wta.org/go-outside/trail-smarts/nice-people-nice-hikes'>they contribute to everyone's experience on trail.</a>",
            location: {
                center: [-120.91816, 47.11753],
                zoom: 11.5,
                pitch: 19.50,
                bearing: 0.00
            },
            onChapterEnter: [
               
                {
                    layer: 'spokaneprojects',
                    opacity: 0
                },
                {
                    layer: 'mplltraverse',
                    opacity: 0
                },
                {
                    layer: 'salteserr',
                    opacity: 0
                },
                {
                    layer: 'etterranch',
                    opacity: 0
                },
                {
                    layer: 'antoinepeak',
                    opacity: 0
                },
                {
                    layer: 'silver-star-trailheads',
                    opacity: 0
                },
                {
                    layer: 'wdfwambassadors',
                    opacity: 1
                },
                {
                    layer: 'norse-peak-wilderness',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'spokaneprojects',
                    opacity: 0
                },
                {
                    layer: 'mplltraverse',
                    opacity: 0
                },
                {
                    layer: 'salteserr',
                    opacity: 0
                },
                {
                    layer: 'etterranch',
                    opacity: 0
                },
                {
                    layer: 'antoinepeak',
                    opacity: 0
                },
                {
                    layer: 'silver-star-trailheads',
                    opacity: 0
                },
                {
                    layer: 'wdfwambassadors',
                    opacity: 0.5
                },
                {
                    layer: 'norse-peak-wilderness',
                    opacity: 0
                },
            ],
        },
        {     
            id: 'snoquerateanawayintro',
            alignment: 'right',
            hidden: false,
            title: '',
            image: imageRoot + 'teanawayhiker.jpg',
            description: "Trails Rebooted is also focusing on improving trails in the Snoquera area outside Mount Rainier and the Teanaway Community Forest (above) just east of Snoqualmie Pass. Both of these areas are increasing in popularity as Washington's hikers look to increase their connections with trails.",
            location: {
                center: [-120.91816, 47.11753],
                zoom: 9.85,
                pitch: 19.50,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            onChapterEnter: [
               
                {
                    layer: 'spokaneprojects',
                    opacity: 0
                },
                {
                    layer: 'mplltraverse',
                    opacity: 0
                },
                {
                    layer: 'salteserr',
                    opacity: 0
                },
                {
                    layer: 'etterranch',
                    opacity: 0
                },
                {
                    layer: 'antoinepeak',
                    opacity: 0
                },
                {
                    layer: 'silver-star-trailheads',
                    opacity: 0
                },
                {
                    layer: 'wdfwambassadors',
                    opacity: 0
                },
                {
                    layer: 'norse-peak-wilderness',
                    opacity: 0.5
                }
            ],
            onChapterExit: [
                {
                    layer: 'spokaneprojects',
                    opacity: 0
                },
                {
                    layer: 'mplltraverse',
                    opacity: 0
                },
                {
                    layer: 'salteserr',
                    opacity: 0
                },
                {
                    layer: 'etterranch',
                    opacity: 0
                },
                {
                    layer: 'antoinepeak',
                    opacity: 0
                },
                {
                    layer: 'silver-star-trailheads',
                    opacity: 0
                },
                {
                    layer: 'wdfwambassadors',
                    opacity: 0
                },
                {
                    layer: 'norse-peak-wilderness',
                    opacity: 1
                },
            ],
        },
        {
            id: 'snoquera',
            alignment: 'left',
            hidden: false,
            title: '2019 - Present: Trail Work and Peering Into A National Park',
            image: imageRoot + 'snoqeracrew.png',
            description: "Just west of Mount Rainier on Highway 410 is the Snoquera area. Work on trails here is maintaining access to a network of trails damaged by fire and erosion. <br><br>This summer, WTA volunteer crews are working on rerouting the Echo Lake Trail and installing handrails on new bridges across the Greenwater River. <br><br>We're also repairing trails damaged by fire in the Norse Peak wilderness. The work is all geared towards dispersing use from Mount Rainier; many trails here boast great views of the mountain with fewer people than the park.",
            location: {
                center: [-121.38690325729652, 47.013913665312785],
                zoom: 11.3,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'jumpTo',
            onChapterEnter: [
               
                {
                    layer: 'spokaneprojects',
                    opacity: 0
                },
                {
                    layer: 'mplltraverse',
                    opacity: 0
                },
                {
                    layer: 'salteserr',
                    opacity: 0
                },
                {
                    layer: 'etterranch',
                    opacity: 0
                },
                {
                    layer: 'antoinepeak',
                    opacity: 0
                },
                {
                    layer: 'silver-star-trailheads',
                    opacity: 0
                },
                {
                    layer: 'wdfwambassadors',
                    opacity: 0
                },
		{
                    layer: 'MLH work locations',
                    opacity: 0
                },
                {
                    layer: 'norse-peak-wilderness',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'spokaneprojects',
                    opacity: 0
                },
                {
                    layer: 'mplltraverse',
                    opacity: 0
                },
                {
                    layer: 'salteserr',
                    opacity: 0
                },
                {
                    layer: 'etterranch',
                    opacity: 0
                },
                {
                    layer: 'antoinepeak',
                    opacity: 0
                },
                {
                    layer: 'silver-star-trailheads',
                    opacity: 0
                },
                {
                    layer: 'wdfwambassadors',
                    opacity: 0
                },
                {
                    layer: 'norse-peak-wilderness',
                    opacity: 0
                },
            ],
        },
        {
            id: 'teanaway',
            alignment: 'left',
            hidden: false,
            title: '2013 - Present: Striving for Trails in the Teanaway',
            image: imageRoot + 'teanawayhiker',
            description: "WTA has been involved in the Teanaway Community Forest since a community of nonprofits and other stakeholders came together to preserve it in 2013. Like at Silver Star, the Teanaway is a real-life example of how long it can take to develop a well-thought out trail network. <a href='https://www.wta.org/news/signpost/meet-the-teanaway-community-forest-2'>Originally purchased in 2013</a> the trail plan was approved <a href='https://www.wta.org/news/signpost/partnership-brings-new-trails-to-the-teanaway-community-forest'>last year</a>. After almost a year of WTA staff advising on the trails plan, we're excited to have a youth volunteer vacation working on the Cheese Rock trail in the summer!",
            location: {
                center: [-120.97528, 47.28061],
                zoom: 11.15,
                pitch: 1.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            onChapterEnter: [
               
                {
                    layer: 'spokaneprojects',
                    opacity: 0
                },
                {
                    layer: 'mplltraverse',
                    opacity: 0
                },
                {
                    layer: 'salteserr',
                    opacity: 0
                },
                {
                    layer: 'etterranch',
                    opacity: 0
                },
                {
                    layer: 'antoinepeak',
                    opacity: 0
                },
                {
                    layer: 'silver-star-trailheads',
                    opacity: 0
                },
                {
                    layer: 'wdfwambassadors',
                    opacity: 0
                },
                {
                    layer: 'norse-peak-wilderness',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'spokaneprojects',
                    opacity: 0
                },
                {
                    layer: 'mplltraverse',
                    opacity: 0
                },
                {
                    layer: 'salteserr',
                    opacity: 0
                },
                {
                    layer: 'etterranch',
                    opacity: 0
                },
                {
                    layer: 'antoinepeak',
                    opacity: 0
                },
                {
                    layer: 'silver-star-trailheads',
                    opacity: 0
                },
                {
                    layer: 'wdfwambassadors',
                    opacity: 0
                },
                {
                    layer: 'norse-peak-wilderness',
                    opacity: 0
                },
            ],
        },
        {
            id: 'frog',
            alignment: 'right',
            hidden: false,
            title: 'Case Study: Frog Mountain',
            image: '',
            description: `Part of rebooting a trail system is pushing for more trails to be built in order to give hikers more places to be outside. This June, the brand new Frog Mountain trail opened in Washington's newest wilderness - the Wild Sky Wilderness. <br><br>Andrea Imler, WTA's Advocacy Director, is thrilled: "Having a new trail in a designated wilderness is very rare and Frog Mountain provides hikers an easy-to-access hike featuring gorgeous open meadows with an abundance of views to surrounding peaks, including Evergreen Mountain Lookout, at the top. It'll take pressure off other nearby trails as well."`,
            location: {
                center: [-121.31442, 47.88487],
                zoom: 12,
                pitch: 1.00,
                bearing: 0.00
            },
            mapAnimation: 'easeTo',
            rotateAnimation: 'true',
            onChapterEnter: [
               
                {
                    layer: 'spokaneprojects',
                    opacity: 0
                },
                {
                    layer: 'mplltraverse',
                    opacity: 0
                },
                {
                    layer: 'salteserr',
                    opacity: 0
                },
                {
                    layer: 'etterranch',
                    opacity: 0
                },
                {
                    layer: 'antoinepeak',
                    opacity: 0
                },
                {
                    layer: 'silver-star-trailheads',
                    opacity: 0
                },
                {
                    layer: 'wdfwambassadors',
                    opacity: 0
                },
                {
                    layer: 'norse-peak-wilderness',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'spokaneprojects',
                    opacity: 0
                },
                {
                    layer: 'mplltraverse',
                    opacity: 0
                },
                {
                    layer: 'salteserr',
                    opacity: 0
                },
                {
                    layer: 'etterranch',
                    opacity: 0
                },
                {
                    layer: 'antoinepeak',
                    opacity: 0
                },
                {
                    layer: 'silver-star-trailheads',
                    opacity: 0
                },
                {
                    layer: 'wdfwambassadors',
                    opacity: 0
                },
                {
                    layer: 'norse-peak-wilderness',
                    opacity: 0
                },
            ],
        },
        {
            id: 'stripedpeak',
            alignment: 'right',
            hidden: false,
            title: 'Case Study: Striped Peak',
            image: imageRoot + 'stripedpeak.jpg',
            description: `We can't forget about the Olympic Peninsula! In 2022, <a href='https://www.wta.org/news/signpost/striped-peak-trail-complete'>WTA opened a 3.5-mile trail on Striped Peak</a>, just a few miles outside of Port Angeles. 270 volunteers came together to build this trail during 83 work parties over the course of 3.5 years. It's part of a larger loop on Striped Peak, so hikers can do a 7 mile out-and-back or a 7.5-mile loop. <br><br>Justin Zarzeczny, recreation manager for the Department of Natural Resources expresses the agency's satisfaction with the project. 

            "This is a rare recreational opportunity in the region and will be enjoyed by many. The sustained efforts by WTA volunteers bumped up the completion of this project by at least 5 years and the quality of the finished product exceeded expectations." `,
            location: {
                center: [-123.69940, 48.15884],
                zoom: 14.55,
                pitch: 1.00,
                bearing: 0.00
            },
            mapAnimation: 'easeTo',
            rotateAnimation: 'true',
            onChapterEnter: [
               
                {
                    layer: 'spokaneprojects',
                    opacity: 0
                },
                {
                    layer: 'mplltraverse',
                    opacity: 0
                },
                {
                    layer: 'salteserr',
                    opacity: 0
                },
                {
                    layer: 'etterranch',
                    opacity: 0
                },
                {
                    layer: 'antoinepeak',
                    opacity: 0
                },
                {
                    layer: 'silver-star-trailheads',
                    opacity: 0
                },
                {
                    layer: 'wdfwambassadors',
                    opacity: 0
                },
                {
                    layer: 'norse-peak-wilderness',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'spokaneprojects',
                    opacity: 0
                },
                {
                    layer: 'mplltraverse',
                    opacity: 0
                },
                {
                    layer: 'salteserr',
                    opacity: 0
                },
                {
                    layer: 'etterranch',
                    opacity: 0
                },
                {
                    layer: 'antoinepeak',
                    opacity: 0
                },
                {
                    layer: 'silver-star-trailheads',
                    opacity: 0
                },
                {
                    layer: 'wdfwambassadors',
                    opacity: 0
                },
                {
                    layer: 'norse-peak-wilderness',
                    opacity: 0
                },
            ],
        },
        {
            id: 'conclusion',
            alignment: 'fully',
            hidden: false,
            title: '',
            image: '',
            description: "Washington's trail system requires constant focus and attention statewide to keep it top tier. But it's not just about trail work. To truly reboot trails, WTA needs advocates to speak up for areas they want preserved; stewards to volunteer as ambassadors AND trail workers; and hikers like you to see themselves as an active part of making WTA's trails welcoming and a pleasant place to be.",
            location: {
                center: [-120.15288, 46.91053],
                zoom: 8.07,
                pitch: 33.50,
                bearing: 0.00
            },
            mapAnimation: 'easeTo',
            onChapterEnter: [
               
                {
                    layer: 'spokaneprojects',
                    opacity: 1
                },
                {
                    layer: 'mplltraverse',
                    opacity: 1
                },
                {
                    layer: 'salteserr',
                    opacity: 1
                },
                {
                    layer: 'etterranch',
                    opacity: 1
                },
                {
                    layer: 'antoinepeak',
                    opacity: 1
                },
                {
                    layer: 'silver-star-trailheads',
                    opacity: 1
                },
                {
                    layer: 'wdfwambassadors',
                    opacity: 1
                },
		{
                    layer: 'MLH work locations',
                    opacity: 1
                },
                {
                    layer: 'norse-peak-wilderness',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'spokaneprojects',
                    opacity: 1
                },
                {
                    layer: 'mplltraverse',
                    opacity: 1
                },
                {
                    layer: 'salteserr',
                    opacity: 1
                },
                {
                    layer: 'etterranch',
                    opacity: 1
                },
                {
                    layer: 'antoinepeak',
                    opacity: 1
                },
                {
                    layer: 'silver-star-trailheads',
                    opacity: 1
                },
                {
                    layer: 'wdfwambassadors',
                    opacity: 1
                },
		{
                    layer: 'MLH work locations',
                    opacity: 1
                },
                {
                    layer: 'norse-peak-wilderness',
                    opacity: 1
                },
            ]
        }
    ]
}
