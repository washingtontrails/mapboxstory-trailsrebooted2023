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
            description: 'WTA has been building new trails near Spokane, including on Mica and Antoine Peaks and at the Saltese Uplands. Each trail built creates more opportunity for hikers to do loop hikes or connect to greenspaces, like the 11.5 mile trail between Liberty Lake Regional Park and Mica Peak.',
            location: {
                center: [-117.23043961551326, 47.67155498313036],
                zoom: 11,
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
            title: 'Mica Peak to Liberty Lake',
            image: imageRoot + 'saltesefrommica.png',
            description: `An 11.5-mile trail on Mica Peak <a href="https://www.wta.org/news/signpost/a-new-connection-near-spokane">opened in 2020</a>, making an <a href="https://www.wta.org/go-hiking/hikes/mica-peak-to-liberty-lake-traverse">excellent long day hike</a> just a few minutes from town. Connecting into the midsection of this traverse is the Saltese Ridge Trail, a route WTA realigned recently to make the trail more sustainable.`,
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
            title: 'Balancing conservation and recreation',
            image: imageRoot + 'salteseflatshiker.png',
            description: "The Saltese Ridge Trail connects the Mica Peak Traverse with the Saltese Uplands Conservation area. Well-built trail is especially important here, since the high desert is a sensitive environment. <br>The realighment WTA crews (orange zigzag) preserves the environment here. It makes the trail more longlasting, and helps visitors coexist with the white-tailed deer, badger, coyote, bobcats, and birds of prey who call this area home.",
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
            alignment: 'right',
            hidden: false,
            title: 'Adding trails to a next-door mountain',
            image: imageRoot + 'antoinepeakview.jpeg',
            description: 'With fantastic views overlooking Liberty Lake, the Spokane Valley, and north to Mount Spokane and the Selkirks, Antoine Peak boasts a robust trail network thanks to investments here that have been under way since 2013. Today, hikers can access trails here from three different trailheads.',
            location: {
            center: [-117.14904, 47.71072],
            zoom: 13.48,
            pitch: 45.00,
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
            ]
        },
        {
            id: 'etterranch',
            alignment: 'left',
            hidden: false,
            title: 'Three hikes from one trailhead',
            image: imageRoot + 'etterranch.png',
            description: 'Most recently, WTA has been working on the trails accessed from Brevier Road. Known as Etter Ranch, this Spokane Valley trailhead opened in 2021 and offers access to three trails: the Arrowleaf Trail, which connects to the Emerald Necklace Loop, and the Lost Apple Trail. Emerald Necklace is a great long day hike, while Lost Apple serves as a shorter and lower elevation option for visitors to enjoy year-round.',
            location: {
                center: [-117.17031, 47.70029],
                zoom: 15.18,
                pitch: 74.00,
                earing: -10.40
            },
            mapAnimation: 'easeTo',
            rotateAnimation: true,
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
            alignment: 'left',
            hidden: false,
            title: "Let's Connect",
            image: imageRoot + 'silvershadow.png',
            description: `As we've done at Spokane, a cost-effective way to enhance a trail network is by <a href='https://www.wta.org/news/signpost/the-power-of-loops-connections'>adding connector trails to already-existing networks.</a> This helps meet Washington's increasing need for recreation options on tight budgets. WTA is helping agencies add connector trails statewide, including on Silver Star Mountain in southwest Washington.`,
            location: {
                center: [-122.23884, 45.74586],
                zoom: 12.20,
                pitch: 72.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
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
            title: '',
            image: imageRoot + 'silver star vista.png',
            description: `Just outside Battle Ground, the Silver Star area provides a fantastic area for hikers to experience wildflowers, a 5-volcano view, and a variety of trails`,
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
            id: 'roadcaveat',
            alignment: 'center',
            hidden: false,
            title: '',
            image: imageRoot + 'caron4109.jpg',
            description: `Those views come at a price, though. Road access stymies hikers approaching from the west or the south. People report vehicular acrobatics or parking miles from the trailhead (opting to roadwalk rather than risk their car's suspension.`,
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
            id: 'vision',
            alignment: 'center',
            hidden: false,
            title: 'A Bright Future for Silver Star',
            image: imageRoot + 'silvershadow.png',
            description: `But relief is in sight. This year, Friends of Road 4109 has more road maintenance planned, and WTA has completed nearly three weeks of work on trails in this area, including on the Silver Shadow Trail (above). Plus, a newly released <a href='https://www.wta.org/news/signpost/a-vision-for-the-future-of-silver-star-recreation-area'>vision plan</a> guides management in this area for years to come.`,
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
            id: 'appaloosa',
            alignment: 'center',
            hidden: false,
            title: '',
            image: imageRoot + 'hidden falls.jpg',
            description: "Hikers understand the value of having this trail system nearby, and have advocated for this area for years. You can experience on-the-ground results from past advocacy efforts by hiking the <a href='https://www.wta.org/go-hiking/hikes/appaloosa-trail'>Appaloosa Trail</a> to Hidden Falls, a route WTA finished in 2021 with support from Back Country Horsemen of Washington.",
            location: {
                center: [-122.10746815393587, 45.7027776457543],
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
                }
            ],
        },
        {
            id: 'bellsmountain',
            alignment: 'center',
            hidden: false,
            title: '',
            image: imageRoot + 'bellsmountaintrail.png',
            description: "Or you could visit the Bells Mountain Trail, where several work parties this spring and summer improved footing through a muddy area crews know as the Slip'N'Slide. The long trail provides access from Moulton Falls County Park and is a crucial connector for people to access the Yacolt Burn State Forest, just adjacent to Silver Star.",
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
            id: 'bluffmountain',
            alignment: 'left',
            hidden: false,
            title: 'A fun place to work',
            image: imageRoot + 'bluffmountainbcrt.jpg',
            description: "Crews at Bluff Mountain log out this trail annually. This crew from 2022 did a ton of work to restore access to this area. And this year, a journalist for The Columbian <a href='https://www.columbian.com/news/2023/jun/24/washington-trails-association-preserves-connection-in-clark-county-wild-spaces/'>joined the crew working on this trail</a> to get a real taste of what trail work is like.",
            location: {
                center: [-122.19152, 45.74160],
                zoom: 13.92,
                pitch: 64.89,
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
                },
            ],
        },
        {
            id: 'silverstarwrapup',
            alignment: 'left',
            hidden: false,
            title: '',
            image: imageRoot + 'bluffbeforeandafter.png',
            description: "WTA's trail work at Silver Star supports past trails plans and the recently-released vision plan, by increasing hiking options in this area. And that is especially important this year, since <a href='https://www.wta.org/news/signpost/know-before-you-go-trails-that-will-be-closed-this-summer'>construction or road washouts have closed a lot of popular trails</a>.",
            location: {
                center: [-122.30162, 45.71298],
                zoom: 12.38,
                pitch: 51.39,
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
            title: 'Workers Ahead',
            image: 'dozer.jpg',
            description: "With the 2020 passage of the Great American Outdoors Act (thanks in part to <a href='https://www.wta.org/news/signpost/gaoa-provides-vital-funding-for-public-lands'>advocacy from hikers like you</a>, the Forest Service began addressing maintenance backlogs statewide! This includes long overdue improvements to many trails on the Mountain Loop Highway. <br>While this does mean many popular trails will be closed for some of the summer, most of them will reopen in time for you to hike them, with the notable exception of Mount Pilchuck",
            location: {
                center: [-121.97977, 48.14008],
                zoom: 10.13,
                pitch: 5.89,
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
            title: 'Fix the Roads',
            image: '',
            description: "The road to Mount Pilchuck is notoriously awful. It's not unusual for the 7 miles from here to the trailhead to take 45 minutes or more. <br> But there's hope. The closure for the full season this year means next year, Forest Road 42 may be unrecognizable to those who have visited before. And that 7-mile drive might not take quite so long.",
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
            alignment: 'center',
            hidden: false,
            title: 'Friendly faces at trailheads',
            image: imageRoot + 'wtaselfie.jpg',
            description: "Rebooting Washington's trail system takes more than on-the-ground road and trail maintenance. It's about <a href='https://www.wta.org/go-outside/trail-smarts/nice-people-nice-hikes'>changing how hikers interact with the landscape, too.</a> <br>In recent years, ambassadors have been staffing trailheads in popular recreation areas, offering hikers advice about what to expect on trail, information about the area, even suggestions for other places to go if the trailhead is full.",
            location: {
                center: [-121.17266, 47.26340],
                zoom: 10.80,
                pitch: 5.89,
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
            alignment: 'right',
            hidden: false,
            title: 'Past successes seed new partnerships',
            image: imageRoot + 'hikeronpilchuck.png',
            description: "In past years, we have had ambassadors <a href='https://www.wta.org/news/signpost/q-a-with-steven-colson-for-trailhead-ambassador-program> at trailheads on the Mountain Loop Highway</a> and in Gothic Basin, as well as at trailheads in the Columbia River Gorge. Now we're launching a <a href='https://www.wta.org/get-involved/outreach/wdfw-ambassadors'>program with the Washington Department of Fish and Wildlife </a> to staff six trailheads in Central Washington this summer. <br>Ambassador programs are a key part of Trails Rebooted, since they provide hikers with advice from trail pros right at the start of their day. In addition, they help hikers understand how <a href='https://www.wta.org/go-outside/trail-smarts/nice-people-nice-hikes'>they contribute to everyone's experience on trail.</a>",
            location: {
                center: [-121.17266, 47.26340],
                zoom: 10.80,
                pitch: 5.89,
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
            id: 'snoquera',
            alignment: 'left',
            hidden: false,
            title: 'Peering into a National Park',
            image: imageRoot + 'snoqeracrew.png',
            description: "Just west of Mount Rainier on Highway 410 is the Snoquera area. Work on trails here helps expand hiking opportunities in a place near Mount Rainier National Park.<br> This summer, you can join WTA volunteer crews on the Echo Lake Trail reroute. They'll be installing handrails on new bridges across the Greenwater River, and repairing trails damaged by fire in the Norse Peak wilderness. The work is all geared towards dispersing use from Mount Rainier; many trails here boast great views of the mountain with fewer people than the park.",
            location: {
                center: [-121.38690325729652, 47.013913665312785],
                zoom: 12,
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
                    opacity: 0.5
                },
            ],
        },
        {
            id: 'teanaway',
            alignment: 'left',
            hidden: false,
            title: 'Trails in the Teanaway',
            image: '',
            description: "WTA has been involved in the Teanaway Community Forest since a community of nonprofits and other stakeholders came together to preserve it in 2013. Like at Silver Star, the Teanaway is a real-life example of how long it can take to develop a well-thought out trail network. Originally purchased in 2013 the trail plan was approved <a href='https://www.wta.org/news/signpost/partnership-brings-new-trails-to-the-teanaway-community-forest'>last year</a>. After almost a year of WTA staff advising on the trails plan, we're excited to have a youth volunteer vacation working on the Cheese Rock trail in the summer!",
            location: {
                center: [-121.15988, 47.34172],
                zoom: 10.29,
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
            description: "Washington's trail system requires constant focus and attention to keep it top tier. But it's not just about trail work. To truly reboot trails, WTA needs advocates to speak up for areas they want preserved; stewards to volunteer as ambassadors AND trail workers; and hikers like you to see themselves as an active part of making WTA's trails welcoming and a pleasant place to be.",
            location: {
                center: [-120.70301, 46.49642],
                zoom: 7.39,
                pitch: 34.99,
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
