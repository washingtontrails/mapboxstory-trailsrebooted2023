var imageRoot = 'https://raw.githubusercontent.com/alroth/trailsrebooted-2023-storymap/main/src/images'
var config = {
    style: 'mapbox://styles/wta/cleiym1xm001i01nvjkh1dtse',
    accessToken: 'pk.eyJ1IjoicmFjaGVsd2VuZGxpbmciLCJhIjoiY2w1c2pobTRhMGFxcTNrbWk5dGprdml0NCJ9.SWxfhiYFmD0C2x2ClwIkwQ',
    showMarkers: true,
    markerColor: '#3FB1CE',
    inset: true,
    theme: 'dark',
    use3dTerrain: true,
    auto: false,
    title: "Trails Rebooted",
    subtitle: "Making Washington's trails the best place to be",
    byline: '',
    footer: `WTA's <a href="https://www.wta.org/trailsrebooted">Trails Rebooted campaign<a> has been working since 2019 to support our most popular recreation areas. That means improving existing trails, championing the construction of new ones and helping hikers see the role they play in the future of trails. See what we've done so far, and what's on the horizon at wta.org/trailsrebooted.<br>`,
    chapters: [ { 
            id: "Expanding Spokane's Trail Network",
            alignment: 'left',
            hidden: false,
            title: 'Adding 3 new trails near Spokane',
            image: 'stumpremoval.png',
            description: 'WTA has been building new trails near Spokane, including Mica and Antoine Peaks, Mount Spokane and the Saltese Uplands. Each trail built creates more opportunity for loop hikes or connections to other greenspaces, like the 11.5 mile trail between Liberty Lake Regional Park and Mica Peak.',
            location: {
                center: [47.658779, -117.426048],
                zoom: 8.5,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'easeTo',
            rotateAnimation: true,
            callback: '',
             onChapterEnter: [
                {
                    layer: 'Spokane Projects',
                    opacity: 0.5
                },
                {
                    layer: 'Mica Peak to Liberty Lake Traverse',
                    opacity: 0
                },
                {
                    layer: 'Saltese Ridge Reroute',
                    opacity: 0
                },
                {
                    layer: 'Etter Ranch',
                    opacity: 0
                },
                {
                    layer: 'Silver Star THs',
                    opacity: 0
                },
                {
                    layer: 'Bluff Mountain/Yacolt Burn WTA Trails',
                    opacity: 0
                },
                {
                    layer: 'WDFW Ambassador Locations',
                    opacity: 0
                },
		{
                    layer: 'MLH work locations',
                    opacity: 0
                },
                {
                    layer: 'Snoquera and Teanaway',
                    opacity: 0
                },
            ],
            onChapterExit: [
                {
                    layer: 'Spokane Projects',
                    opacity: 0.5
                },
                {
                    layer: 'Mica Peak to Liberty Lake Traverse',
                    opacity: 1
                },
                {
                    layer: 'Saltese Ridge Reroute',
                    opacity: 0
                },
                {
                    layer: 'Etter Ranch',
                    opacity: 0
                },
                {
                    layer: 'Silver Star THs',
                    opacity: 0
                },
                {
                    layer: 'Bluff Mountain/Yacolt Burn WTA Trails',
                    opacity: 0
                },
                {
                    layer: 'WDFW Ambassador Locations',
                    opacity: 0
                },
		{
                    layer: 'MLH work locations',
                    opacity: 0
                },
                {
                    layer: 'Snoquera and Teanaway',
                    opacity: 0
                },
            ],
    },
    {
            id: 'Mica Peak',
            alignment: 'right',
            hidden: false,
            title: 'Mica Peak to Liberty Lake',
            image: 'saltesefrommica.jpeg',
            description: `An 11.5-mile trail on Mica Peak <a href="https://www.wta.org/news/signpost/a-new-connection-near-spokane">opened in 2020</a>, making an <a href="https://www.wta.org/go-hiking/hikes/mica-peak-to-liberty-lake-traverse">excellent day hike</a> just a few minutes from town. You can even see the Saltese Uplands, another location WTA is working in, from a section of the traverse.`,
            location: {
                center: [47.5744, -117.1355],
                zoom: 8.5,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
               
                {
                    layer: 'Spokane Projects',
                    opacity: 0
                },
                {
                    layer: 'Mica Peak to Liberty Lake Traverse',
                    opacity: 1
                },
                {
                    layer: 'Saltese Ridge Reroute',
                    opacity: 0
                },
                {
                    layer: 'Etter Ranch',
                    opacity: 0
                },
                {
                    layer: 'Silver Star THs',
                    opacity: 0
                },
                {
                    layer: 'Bluff Mountain/Yacolt Burn WTA Trails',
                    opacity: 0
                },
                {
                    layer: 'WDFW Ambassador Locations',
                    opacity: 0
                },
		{
                    layer: 'MLH work locations',
                    opacity: 0
                },
                {
                    layer: 'Snoquera and Teanaway',
                    opacity: 0
                },
            ],
            onChapterExit: [
                {
                    layer: 'Spokane Projects',
                    opacity: 0
                },
                {
                    layer: 'Mica Peak to Liberty Lake Traverse',
                    opacity: 0.5
                },
                {
                    layer: 'Saltese Ridge Reroute',
                    opacity: 0
                },
                {
                    layer: 'Etter Ranch',
                    opacity: 0
                },
                {
                    layer: 'Silver Star THs',
                    opacity: 0
                },
                {
                    layer: 'Bluff Mountain/Yacolt Burn WTA Trails',
                    opacity: 0
                },
                {
                    layer: 'WDFW Ambassador Locations',
                    opacity: 0
                },
		{
                    layer: 'MLH work locations',
                    opacity: 0
                },
                {
                    layer: 'Snoquera and Teanaway',
                    opacity: 0
                },
            ],
    },
    {       id: 'Saltese Uplands',
            alignment: 'left',
            hidden: false,
            title: 'Balancing conservation and recreation',
            image: 'salteseflatshiker.png',
            description: "Just a mile south of I-90, the Saltese Uplands are an excellent leg-stretcher or local spot to visit year-round. There are 7 miles of trails found here in a fragile shrub steppe habitat. In landscapes like this, it's very important for visitors to stay on trail, because the high desert of Central Washington is a sensitive environment. <br>So WTA is working on improving trails to make the way clearer and to keep hikers on trail here. Preserving the environment here helps people coexist with the white-tailed deer, badger, coyote, bobcats, and birds of prey who call this area home.",
            location: {
                center: [47.6422, -117.1263],
                zoom: 12.52,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
               
                {
                    layer: 'Spokane Projects',
                    opacity: 0
                },
                {
                    layer: 'Mica Peak to Liberty Lake Traverse',
                    opacity: 1
                },
                {
                    layer: 'Saltese Ridge Reroute',
                    opacity: 1
                },
                {
                    layer: 'Etter Ranch',
                    opacity: 0
                },
                {
                    layer: 'Silver Star THs',
                    opacity: 0
                },
                {
                    layer: 'Bluff Mountain/Yacolt Burn WTA Trails',
                    opacity: 0
                },
                {
                    layer: 'WDFW Ambassador Locations',
                    opacity: 0
                },
		{
                    layer: 'MLH work locations',
                    opacity: 0
                },
                {
                    layer: 'Snoquera and Teanaway',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'Spokane Projects',
                    opacity: 0
                },
                {
                    layer: 'Mica Peak to Liberty Lake Traverse',
                    opacity: 0
                },
                {
                    layer: 'Saltese Ridge Reroute',
                    opacity: 1
                },
                {
                    layer: 'Etter Ranch',
                    opacity: 0
                },
                {
                    layer: 'Silver Star THs',
                    opacity: 0
                },
                {
                    layer: 'Bluff Mountain/Yacolt Burn WTA Trails',
                    opacity: 0
                },
                {
                    layer: 'WDFW Ambassador Locations',
                    opacity: 0
                },
		{
                    layer: 'MLH work locations',
                    opacity: 0
                },
                {
                    layer: 'Snoquera and Teanaway',
                    opacity: 0
                }
            ],
        },
        {
            id: 'Antoine Peak Access',
            alignment: 'center',
            hidden: false,
            title: 'Adding trails to a next-door mountain',
            image: 'etterranch.png',
            description: 'With fantastic views overlooking Liberty Lake, the Spokane Valley, and north to Mount Spokane and the Selkirks, Antoine Peak is popular with locals. Investments in the trail system here have been under way since 2013, resulting in three different access points for the trail network on Antoine Peak. <br>Most recently, WTA has been working on the west access on Brevier Road and the trails there. <br>The most recent addition to the Conservation Area is the Etter Ranch property, with a trailhead located in the Spokane Valley at Wellesley and Flora. The trailhead opened in 2021, and offers access to the Arrowleaf Trail, which connects to the Emerald Necklace Loop. The nearby Lost Apple Trail serves as a shorter and lower elevation option for visitors to enjoy year-round.',
            location: {
                center: [47.7009, -117.1706],
                zoom: 4,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter:[
               
                {
                    layer: 'Spokane Projects',
                    opacity: 0
                },
                {
                    layer: 'Mica Peak to Liberty Lake Traverse',
                    opacity: 0
                },
                {
                    layer: 'Saltese Ridge Reroute',
                    opacity: 0
                },
                {
                    layer: 'Etter Ranch',
                    opacity: 1
                },
                {
                    layer: 'Silver Star THs',
                    opacity: 0
                },
                {
                    layer: 'Bluff Mountain/Yacolt Burn WTA Trails',
                    opacity: 0
                },
                {
                    layer: 'WDFW Ambassador Locations',
                    opacity: 0
                },
		{
                    layer: 'MLH work locations',
                    opacity: 0
                },
                {
                    layer: 'Snoquera and Teanaway',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'Spokane Projects',
                    opacity: 0
                },
                {
                    layer: 'Mica Peak to Liberty Lake Traverse',
                    opacity: 0
                },
                {
                    layer: 'Saltese Ridge Reroute',
                    opacity: 0
                },
                {
                    layer: 'Etter Ranch',
                    opacity: 0
                },
                {
                    layer: 'Silver Star THs',
                    opacity: 0
                },
                {
                    layer: 'Bluff Mountain/Yacolt Burn WTA Trails',
                    opacity: 0
                },
                {
                    layer: 'WDFW Ambassador Locations',
                    opacity: 0
                },
		{
                    layer: 'MLH work locations',
                    opacity: 0
                },
                {
                    layer: 'Snoquera and Teanaway',
                    opacity: 0
                }
            ]
        },
        {
            id: 'transition',
            alignment: 'fully',
            hidden: false,
            title: "Let's Connect",
            image: 'silvershadow.png',
            description: `One way to enhance a trail network with minimal budget is by <a href='https://www.wta.org/news/signpost/the-power-of-loops-connections'>adding connector trails to already-existing networks.</a> This helps an area meet increasing need for recreation options while balancing WTA's capacity to support land managers statewide. Trails Rebooted is helping add connectors statewide, including on Silver Star Mountain in southwest Washington, where we built the <a href='https://www.wta.org/go-hiking/hikes/silver-shadow-loop'>Silver Shadow Trail</a> in 2018.`,
            location: {
                center: [45.772608, -122.244337],
                zoom: 4,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback:'',
            onChapterEnter: [
               
                {
                    layer: 'Spokane Projects',
                    opacity: 0
                },
                {
                    layer: 'Mica Peak to Liberty Lake Traverse',
                    opacity: 0
                },
                {
                    layer: 'Saltese Ridge Reroute',
                    opacity: 0
                },
                {
                    layer: 'Etter Ranch',
                    opacity: 0
                },
                {
                    layer: 'Silver Star THs',
                    opacity: 0.5
                },
                {
                    layer: 'Bluff Mountain/Yacolt Burn WTA Trails',
                    opacity: 0
                },
                {
                    layer: 'WDFW Ambassador Locations',
                    opacity: 0
                },
		{
                    layer: 'MLH work locations',
                    opacity: 0
                },
                {
                    layer: 'Snoquera and Teanaway',
                    opacity: 0
                }
            ],
                    onChapterExit: [
                {
                    layer: 'Spokane Projects',
                    opacity: 0
                },
                {
                    layer: 'Mica Peak to Liberty Lake Traverse',
                    opacity: 0
                },
                {
                    layer: 'Saltese Ridge Reroute',
                    opacity: 0
                },
                {
                    layer: 'Etter Ranch',
                    opacity: 0
                },
                {
                    layer: 'Silver Star THs',
                    opacity: 1
                },
                {
                    layer: 'Bluff Mountain/Yacolt Burn WTA Trails',
                    opacity: 0
                },
                {
                    layer: 'WDFW Ambassador Locations',
                    opacity: 0
                },
		{
                    layer: 'MLH work locations',
                    opacity: 0
                },
                {
                    layer: 'Snoquera and Teanaway',
                    opacity: 0
                }
             ],
            },
{
            id: 'Silver Star',
            alignment: 'center',
            hidden: false,
            title: 'A Bright Future for Silver Star',
            image: 'silverstarvista.png',
            description: `Just outside Battle Ground, the Silver Star area provides a fantastic area for hikers to experience wildflowers, a 5-volcano view, and a variety of trails.`,
            location: {
                center: [45.7423, -122.1910],
                zoom: 4,
                pitch: 0.00,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
               
                {
                    layer: 'Spokane Projects',
                    opacity: 0
                },
                {
                    layer: 'Mica Peak to Liberty Lake Traverse',
                    opacity: 0
                },
                {
                    layer: 'Saltese Ridge Reroute',
                    opacity: 0
                },
                {
                    layer: 'Etter Ranch',
                    opacity: 0
                },
                {
                    layer: 'Silver Star THs',
                    opacity: 0.5
                },
                {
                    layer: 'Bluff Mountain/Yacolt Burn WTA Trails',
                    opacity: 0
                },
                {
                    layer: 'WDFW Ambassador Locations',
                    opacity: 0
                },
		{
                    layer: 'MLH work locations',
                    opacity: 0
                },
                {
                    layer: 'Snoquera and Teanaway',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'Spokane Projects',
                    opacity: 0
                },
                {
                    layer: 'Mica Peak to Liberty Lake Traverse',
                    opacity: 0
                },
                {
                    layer: 'Saltese Ridge Reroute',
                    opacity: 0
                },
                {
                    layer: 'Etter Ranch',
                    opacity: 0
                },
                {
                    layer: 'Silver Star THs',
                    opacity: 1
                },
                {
                    layer: 'Bluff Mountain/Yacolt Burn WTA Trails',
                    opacity: 0
                },
                {
                    layer: 'WDFW Ambassador Locations',
                    opacity: 0
                },
		{
                    layer: 'MLH work locations',
                    opacity: 0
                },
                {
                    layer: 'Snoquera and Teanaway',
                    opacity: 0
                }
            ],
        },
        {
            id: 'Silver Star',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: `Those views come at a price, though. Road access stymies hikers approaching from the west or the south. People report vehicular acrobatics or parking miles from the trailhead (opting to roadwalk rather than risk their car's suspension. <br> But relief is in sight. This year, Friends of Road 4109 has more road maintenance planned, WTA has completed nearly three weeks of work on trails in this area, and a newly released <a href='https://www.wta.org/news/signpost/a-vision-for-the-future-of-silver-star-recreation-area'>vision plan(</a> will guide management in this area for years to come.`,
            location: {
                center: [45.7423, -122.1910],
                zoom: 4,
                pitch: 0.00,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
               
                {
                    layer: 'Spokane Projects',
                    opacity: 0
                },
                {
                    layer: 'Mica Peak to Liberty Lake Traverse',
                    opacity: 0
                },
                {
                    layer: 'Saltese Ridge Reroute',
                    opacity: 0
                },
                {
                    layer: 'Etter Ranch',
                    opacity: 0
                },
                {
                    layer: 'Silver Star THs',
                    opacity: 0.5
                },
                {
                    layer: 'Bluff Mountain/Yacolt Burn WTA Trails',
                    opacity: 0
                },
                {
                    layer: 'WDFW Ambassador Locations',
                    opacity: 0
                },
		{
                    layer: 'MLH work locations',
                    opacity: 0
                },
                {
                    layer: 'Snoquera and Teanaway',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'Spokane Projects',
                    opacity: 0
                },
                {
                    layer: 'Mica Peak to Liberty Lake Traverse',
                    opacity: 0
                },
                {
                    layer: 'Saltese Ridge Reroute',
                    opacity: 0
                },
                {
                    layer: 'Etter Ranch',
                    opacity: 0
                },
                {
                    layer: 'Silver Star THs',
                    opacity: 1
                },
                {
                    layer: 'Bluff Mountain/Yacolt Burn WTA Trails',
                    opacity: 0
                },
                {
                    layer: 'WDFW Ambassador Locations',
                    opacity: 0
                },
		{
                    layer: 'MLH work locations',
                    opacity: 0
                },
                {
                    layer: 'Snoquera and Teanaway',
                    opacity: 0
                }
            ],            
        },
        {
id: 'Bluff Mountain/Yacolt Burn WTA trails',
            alignment: 'center',
            hidden: false,
            title: '',
            image: 'bluffmountainbcrt.jpg',
            description: "The plan also helps inform maintenance on trails in the Yacolt Burn State Forest, which connects into Silver Star. We built the new <a href='https://www.wta.org/go-hiking/hikes/appaloosa-trail'>Appaloosa Trail</a> with support from Back Country Horsemen of Washington, and trail crews (including the Lost Trails Found crew in 2022) have kept the Bluff Mountain (above) and Bells Mountain trails looking great.",
            location: {
                center: [45.7027776457543, -122.10746815393587],
                zoom: 4,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
               
                {
                    layer: 'Spokane Projects',
                    opacity: 0
                },
                {
                    layer: 'Mica Peak to Liberty Lake Traverse',
                    opacity: 0
                },
                {
                    layer: 'Saltese Ridge Reroute',
                    opacity: 0
                },
                {
                    layer: 'Etter Ranch',
                    opacity: 0
                },
                {
                    layer: 'Silver Star THs',
                    opacity: 0
                },
                {
                    layer: 'Bluff Mountain/Yacolt Burn WTA Trails',
                    opacity: 1
                },
                {
                    layer: 'WDFW Ambassador Locations',
                    opacity: 0
                },
		{
                    layer: 'MLH work locations',
                    opacity: 0
                },
                {
                    layer: 'Snoquera and Teanaway',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'Spokane Projects',
                    opacity: 0
                },
                {
                    layer: 'Mica Peak to Liberty Lake Traverse',
                    opacity: 0
                },
                {
                    layer: 'Saltese Ridge Reroute',
                    opacity: 0
                },
                {
                    layer: 'Etter Ranch',
                    opacity: 0
                },
                {
                    layer: 'Silver Star THs',
                    opacity: 0
                },
                {
                    layer: 'Bluff Mountain/Yacolt Burn WTA Trails',
                    opacity: 1
                },
                {
                    layer: 'WDFW Ambassador Locations',
                    opacity: 0
                },
		{
                    layer: 'MLH work locations',
                    opacity: 0
                },
                {
                    layer: 'Snoquera and Teanaway',
                    opacity: 0
                }
            ],
        },
        {
id: 'Bells Mountain',
            alignment: 'center',
            hidden: false,
            title: 'bellsmountaintrail.png',
            image: '',
            description: "On Bells Mountain Trail, several work parties this spring and summer improved footing through a muddy area crews know as the Slip'N'Slide. The long trail provides access from Moulton Falls County Park and is a crucial connector for people to access Yacolt Burn State Forest",
            location: {
                center: [45.83264308646734, -122.39451041131447],
                zoom: 4,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
               
                {
                    layer: 'Spokane Projects',
                    opacity: 0
                },
                {
                    layer: 'Mica Peak to Liberty Lake Traverse',
                    opacity: 0
                },
                {
                    layer: 'Saltese Ridge Reroute',
                    opacity: 0
                },
                {
                    layer: 'Etter Ranch',
                    opacity: 0
                },
                {
                    layer: 'Silver Star THs',
                    opacity: 0
                },
                {
                    layer: 'Bluff Mountain/Yacolt Burn WTA Trails',
                    opacity: 1
                },
                {
                    layer: 'WDFW Ambassador Locations',
                    opacity: 0
                },
		{
                    layer: 'MLH work locations',
                    opacity: 0
                },
                {
                    layer: 'Snoquera and Teanaway',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'Spokane Projects',
                    opacity: 0
                },
                {
                    layer: 'Mica Peak to Liberty Lake Traverse',
                    opacity: 0
                },
                {
                    layer: 'Saltese Ridge Reroute',
                    opacity: 0
                },
                {
                    layer: 'Etter Ranch',
                    opacity: 0
                },
                {
                    layer: 'Silver Star THs',
                    opacity: 0
                },
                {
                    layer: 'Bluff Mountain/Yacolt Burn WTA Trails',
                    opacity: 1
                },
                {
                    layer: 'WDFW Ambassador Locations',
                    opacity: 0
                },
		{
                    layer: 'MLH work locations',
                    opacity: 0
                },
                {
                    layer: 'Snoquera and Teanaway',
                    opacity: 0
                },
            ],
        },
        {
            id: 'Bluff Mountain work',
            alignment: 'center',
            hidden: false,
            title: 'A Vision For the Future',
            image: 'viewfrombluff.png',
            description: "Crews at Bluff Mountain have worked on logging this trail out annually to retain access to this area. This work supports past trails plans and the recently-released vision plan as well. <br>While vision plans set a direction and goals for management of an area they are not tied to a timeline. They're aspirational and future oriented. That means hikers can expect improvements to continue in this area for years to come!",
            location: {
                center: [46.38865796357578, -122.14457201037887],
                zoom: 8,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
               
                {
                    layer: 'Spokane Projects',
                    opacity: 0
                },
                {
                    layer: 'Mica Peak to Liberty Lake Traverse',
                    opacity: 0
                },
                {
                    layer: 'Saltese Ridge Reroute',
                    opacity: 0
                },
                {
                    layer: 'Etter Ranch',
                    opacity: 0
                },
                {
                    layer: 'Silver Star THs',
                    opacity: 0
                },
                {
                    layer: 'Bluff Mountain/Yacolt Burn WTA Trails',
                    opacity: 1
                },
                {
                    layer: 'WDFW Ambassador Locations',
                    opacity: 0
                },
		{
                    layer: 'MLH work locations',
                    opacity: 0
                },
                {
                    layer: 'Snoquera and Teanaway',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'Spokane Projects',
                    opacity: 0
                },
                {
                    layer: 'Mica Peak to Liberty Lake Traverse',
                    opacity: 0
                },
                {
                    layer: 'Saltese Ridge Reroute',
                    opacity: 0
                },
                {
                    layer: 'Etter Ranch',
                    opacity: 0
                },
                {
                    layer: 'Silver Star THs',
                    opacity: 0
                },
                {
                    layer: 'Bluff Mountain/Yacolt Burn WTA Trails',
                    opacity: 0
                },
                {
                    layer: 'WDFW Ambassador Locations',
                    opacity: 0
                },
		{
                    layer: 'MLH work locations',
                    opacity: 0
                },
                {
                    layer: 'Snoquera and Teanaway',
                    opacity: 0
                },
            ],
        },
        {
            id: 'MLH Work Locations',
            alignment: 'right',
            hidden: false,
            title: 'Good Things Come to Those Who Wait',
            image: 'dozer.jpg',
            description: "With the 2020 passage of the Great American Outdoors Act (thanks in part to <a href='https://www.wta.org/news/signpost/gaoa-provides-vital-funding-for-public-lands'>advocacy from hikers like you</a>, the Forest Service began addressing maintenance backlogs statewide! This includes long overdue improvements to <a href='https://www.wta.org/news/signpost/know-before-you-go-trails-that-will-be-closed-this-summer'>many trails on the Mountain Loop Highway.</a> <br>While this does mean many popular trails will be closed for some of the summer, most of them will be reopen, with the notable exception of Mount Pilchuck",
            location: {
                center: [48.08497011365875, -121.78626439635774],
                zoom: 4,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
               
                {
                    layer: 'Spokane Projects',
                    opacity: 0
                },
                {
                    layer: 'Mica Peak to Liberty Lake Traverse',
                    opacity: 0
                },
                {
                    layer: 'Saltese Ridge Reroute',
                    opacity: 0
                },
                {
                    layer: 'Etter Ranch',
                    opacity: 0
                },
                {
                    layer: 'Silver Star THs',
                    opacity: 0
                },
                {
                    layer: 'Bluff Mountain/Yacolt Burn WTA Trails',
                    opacity: 0
                },
                {
                    layer: 'WDFW Ambassador Locations',
                    opacity: 0
                },
		{
                    layer: 'MLH work locations',
                    opacity: 1
                },
                {
                    layer: 'Snoquera and Teanaway',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'Spokane Projects',
                    opacity: 0
                },
                {
                    layer: 'Mica Peak to Liberty Lake Traverse',
                    opacity: 0.5
                },
                {
                    layer: 'Saltese Ridge Reroute',
                    opacity: 0
                },
                {
                    layer: 'Etter Ranch',
                    opacity: 0
                },
                {
                    layer: 'Silver Star THs',
                    opacity: 0
                },
                {
                    layer: 'Bluff Mountain/Yacolt Burn WTA Trails',
                    opacity: 0
                },
                {
                    layer: 'WDFW Ambassador Locations',
                    opacity: 0
                },
		{
                    layer: 'MLH work locations',
                    opacity: 1
                },
                {
                    layer: 'Snoquera and Teanaway',
                    opacity: 0
                },
            ],
        },
        {
            id: 'MLH Work Locations',
            alignment: 'right',
            hidden: false,
            title: 'Fixing the Roads',
            image: '',
            description: "Like some of the roads in Silver Star, the road to Mount Pilchuck is notoriously awful. It's not unusual for the roughly 7-mile drive from the main road to the trailhead to take 45 minutes or more. <br> But there's hope. A timber sale in the area has closed the road past the Heather Lake trailhead, but part of the closure terms involve road repair! Next season, Forest Road 42 may be unrecognizable to those who have visited before. And that 7-mile drive might not take quite so long.",
            location: {
                center: [48.08497011365875, -121.78626439635774],
                zoom: 4,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
               
                {
                    layer: 'Spokane Projects',
                    opacity: 0
                },
                {
                    layer: 'Mica Peak to Liberty Lake Traverse',
                    opacity: 0
                },
                {
                    layer: 'Saltese Ridge Reroute',
                    opacity: 0
                },
                {
                    layer: 'Etter Ranch',
                    opacity: 0
                },
                {
                    layer: 'Silver Star THs',
                    opacity: 0
                },
                {
                    layer: 'Bluff Mountain/Yacolt Burn WTA Trails',
                    opacity: 0
                },
                {
                    layer: 'WDFW Ambassador Locations',
                    opacity: 0
                },
		{
                    layer: 'MLH work locations',
                    opacity: 1
                },
                {
                    layer: 'Snoquera and Teanaway',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'Spokane Projects',
                    opacity: 0
                },
                {
                    layer: 'Mica Peak to Liberty Lake Traverse',
                    opacity: 0.5
                },
                {
                    layer: 'Saltese Ridge Reroute',
                    opacity: 0
                },
                {
                    layer: 'Etter Ranch',
                    opacity: 0
                },
                {
                    layer: 'Silver Star THs',
                    opacity: 0
                },
                {
                    layer: 'Bluff Mountain/Yacolt Burn WTA Trails',
                    opacity: 0
                },
                {
                    layer: 'WDFW Ambassador Locations',
                    opacity: 0
                },
		{
                    layer: 'MLH work locations',
                    opacity: 1
                },
                {
                    layer: 'Snoquera and Teanaway',
                    opacity: 0
                },
            ],
        },
        {
            id: 'Ambassador programs',
            alignment: 'center',
            hidden: false,
            title: 'Friendly faces at trailheads',
            image: '',
            description: "Rebooting Washington's trail system takes more than on-the-ground road and trail maintenance. It's about changing how hikers interact with the landscape, too. <br>In recent years, trailhead ambassadors have been staffing trailheads in popular recreation areas. These helpful folks offer hikers advice about what to expect on trail, information about the area, even suggestions for other places to go if the trailhead is full.",
            location: {
                center: [47.38663973027454, -120.52229946577403],
                zoom: 8,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
               
                {
                    layer: 'Spokane Projects',
                    opacity: 0
                },
                {
                    layer: 'Mica Peak to Liberty Lake Traverse',
                    opacity: 0
                },
                {
                    layer: 'Saltese Ridge Reroute',
                    opacity: 0
                },
                {
                    layer: 'Etter Ranch',
                    opacity: 0
                },
                {
                    layer: 'Silver Star THs',
                    opacity: 0
                },
                {
                    layer: 'Bluff Mountain/Yacolt Burn WTA Trails',
                    opacity: 0
                },
                {
                    layer: 'WDFW Ambassador Locations',
                    opacity: 0.5
                },
		{
                    layer: 'MLH work locations',
                    opacity: 0
                },
                {
                    layer: 'Snoquera and Teanaway',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'Spokane Projects',
                    opacity: 0
                },
                {
                    layer: 'Mica Peak to Liberty Lake Traverse',
                    opacity: 0
                },
                {
                    layer: 'Saltese Ridge Reroute',
                    opacity: 0
                },
                {
                    layer: 'Etter Ranch',
                    opacity: 0
                },
                {
                    layer: 'Silver Star THs',
                    opacity: 0
                },
                {
                    layer: 'Bluff Mountain/Yacolt Burn WTA Trails',
                    opacity: 0
                },
                {
                    layer: 'WDFW Ambassador Locations',
                    opacity: 1
                },
		{
                    layer: 'MLH work locations',
                    opacity: 0
                },
                {
                    layer: 'Snoquera and Teanaway',
                    opacity: 0
                },
            ],
        },
        {
id: 'Ambassador programs - 2',
            alignment: 'center',
            hidden: false,
            title: 'Past successes seed new partnerships',
            image: '',
            description: "In past years, we have had ambassadors <a href='https://www.wta.org/news/signpost/q-a-with-steven-colson-for-trailhead-ambassador-program> at trailheads on the Mountain Loop Highway</a> and in Gothic Basin, as well as at trailheads in the Columbia River Gorge. Now we're launching a <a href='https://www.wta.org/get-involved/outreach/wdfw-ambassadors'>program with the Washington Department of Fish and Wildlife </a> to staff six trailheads in Central Washington this summer. <br>Ambassador programs are a key part of Trails Rebooted, since they provide hikers with advice from trail pros right at the start of their day. In addition, they help hikers understand how <a href='https://www.wta.org/go-outside/trail-smarts/nice-people-nice-hikes'>they contribute to everyone's experience on trail.</a>",
            location: {
                center: [47.38663973027454, -120.52229946577403],
                zoom: 4,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
               
                {
                    layer: 'Spokane Projects',
                    opacity: 0
                },
                {
                    layer: 'Mica Peak to Liberty Lake Traverse',
                    opacity: 0
                },
                {
                    layer: 'Saltese Ridge Reroute',
                    opacity: 0
                },
                {
                    layer: 'Etter Ranch',
                    opacity: 0
                },
                {
                    layer: 'Silver Star THs',
                    opacity: 0
                },
                {
                    layer: 'Bluff Mountain/Yacolt Burn WTA Trails',
                    opacity: 0
                },
                {
                    layer: 'WDFW Ambassador Locations',
                    opacity: 1
                },
		{
                    layer: 'MLH work locations',
                    opacity: 0
                },
                {
                    layer: 'Snoquera and Teanaway',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'Spokane Projects',
                    opacity: 0
                },
                {
                    layer: 'Mica Peak to Liberty Lake Traverse',
                    opacity: 0
                },
                {
                    layer: 'Saltese Ridge Reroute',
                    opacity: 0
                },
                {
                    layer: 'Etter Ranch',
                    opacity: 0
                },
                {
                    layer: 'Silver Star THs',
                    opacity: 0
                },
                {
                    layer: 'Bluff Mountain/Yacolt Burn WTA Trails',
                    opacity: 0
                },
                {
                    layer: 'WDFW Ambassador Locations',
                    opacity: 0.5
                },
		{
                    layer: 'MLH work locations',
                    opacity: 0
                },
                {
                    layer: 'Snoquera and Teanaway',
                    opacity: 0
                },
            ],
        },
        {     
id: 'Other work areas',
            alignment: 'center',
            hidden: false,
            title: '',
            image: 'teanawayhiker.jpg',
            description: "Trails Rebooted is also focusing on improving trails in the Snoquera area outside Mount Rainier and the Teanaway Community Forest (above) just east of Snoqualmie Pass. Both of these areas are increasing in popularity as Washington's hikers look to increase their connections with trails.",
            location: {
                center: [47.176572886635284, -120.85475938341496],
                zoom: 4,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
               
                {
                    layer: 'Spokane Projects',
                    opacity: 0
                },
                {
                    layer: 'Mica Peak to Liberty Lake Traverse',
                    opacity: 0
                },
                {
                    layer: 'Saltese Ridge Reroute',
                    opacity: 0
                },
                {
                    layer: 'Etter Ranch',
                    opacity: 0
                },
                {
                    layer: 'Silver Star THs',
                    opacity: 0
                },
                {
                    layer: 'Bluff Mountain/Yacolt Burn WTA Trails',
                    opacity: 0
                },
                {
                    layer: 'WDFW Ambassador Locations',
                    opacity: 0
                },
		{
                    layer: 'MLH work locations',
                    opacity: 0
                },
                {
                    layer: 'Snoquera and Teanaway',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'Spokane Projects',
                    opacity: 0
                },
                {
                    layer: 'Mica Peak to Liberty Lake Traverse',
                    opacity: 0
                },
                {
                    layer: 'Saltese Ridge Reroute',
                    opacity: 0
                },
                {
                    layer: 'Etter Ranch',
                    opacity: 0
                },
                {
                    layer: 'Silver Star THs',
                    opacity: 0
                },
                {
                    layer: 'Bluff Mountain/Yacolt Burn WTA Trails',
                    opacity: 0
                },
                {
                    layer: 'WDFW Ambassador Locations',
                    opacity: 0
                },
		{
                    layer: 'MLH work locations',
                    opacity: 0
                },
                {
                    layer: 'Snoquera and Teanaway',
                    opacity: 0
                },
            ],
        },
        {
            id: 'Snoquera',
            alignment: 'left',
            hidden: false,
            title: 'Peering into a National Park',
            image: 'snoqeracrew.png',
            description: "Just west of Mount Rainier on Highway 410 is the Snoquera area. Including hikes like Noble Knob, the Palisades, and Snoquera Falls, working on trails here helps expand hiking opportunities in a place near Mount Rainier National Park <br> This summer, you can join WTA volunteer crews continuing work on the Echo Lake Trail reroute. They'll be installing handrails on new bridges across the Greenwater River, and repairing trails damaged by fire in the Norse Peak wilderness. The work is all geared towards dispersing use from Mount Rainier; many trails here boast great views of the mountain.",
            location: {
                center: [47.013913665312785, -121.38690325729652],
                zoom: 6,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
               
                {
                    layer: 'Spokane Projects',
                    opacity: 0
                },
                {
                    layer: 'Mica Peak to Liberty Lake Traverse',
                    opacity: 0
                },
                {
                    layer: 'Saltese Ridge Reroute',
                    opacity: 0
                },
                {
                    layer: 'Etter Ranch',
                    opacity: 0
                },
                {
                    layer: 'Silver Star THs',
                    opacity: 0
                },
                {
                    layer: 'Bluff Mountain/Yacolt Burn WTA Trails',
                    opacity: 0
                },
                {
                    layer: 'WDFW Ambassador Locations',
                    opacity: 0
                },
		{
                    layer: 'MLH work locations',
                    opacity: 0
                },
                {
                    layer: 'Snoquera and Teanaway',
                    opacity: 0.5
                }
            ],
            onChapterExit: [
                {
                    layer: 'Spokane Projects',
                    opacity: 0
                },
                {
                    layer: 'Mica Peak to Liberty Lake Traverse',
                    opacity: 0
                },
                {
                    layer: 'Saltese Ridge Reroute',
                    opacity: 0
                },
                {
                    layer: 'Etter Ranch',
                    opacity: 0
                },
                {
                    layer: 'Silver Star THs',
                    opacity: 0
                },
                {
                    layer: 'Bluff Mountain/Yacolt Burn WTA Trails',
                    opacity: 0
                },
                {
                    layer: 'WDFW Ambassador Locations',
                    opacity: 0
                },
		{
                    layer: 'MLH work locations',
                    opacity: 0
                },
                {
                    layer: 'Snoquera and Teanaway',
                    opacity: 1
                },
            ],
        },
        {
            id: 'Teanaway',
            alignment: 'left',
            hidden: false,
            title: 'Trails in the Teanaway',
            image: './path/to/image/source.png',
            description: "WTA has been involved in the Teanaway Community Forest since a community of nonprofits and other stakeholders came together to preserve it in 2013. Like at Silver Star, the Teanaway is a real-life example of how long it can take to develop a well-thought out trail network. Originally purchased in 2013 the trail plan was approved <a href='https://www.wta.org/news/signpost/partnership-brings-new-trails-to-the-teanaway-community-forest'>last year</a>. This year, we're excited to have a youth volunteer vacation working on the Cheese Rock trail in the fall!",
            location: {
                center: [45.8332, -122.3842],
                zoom: 4,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'easeTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
               
                {
                    layer: 'Spokane Projects',
                    opacity: 0
                },
                {
                    layer: 'Mica Peak to Liberty Lake Traverse',
                    opacity: 0
                },
                {
                    layer: 'Saltese Ridge Reroute',
                    opacity: 0
                },
                {
                    layer: 'Etter Ranch',
                    opacity: 0
                },
                {
                    layer: 'Silver Star THs',
                    opacity: 0
                },
                {
                    layer: 'Bluff Mountain/Yacolt Burn WTA Trails',
                    opacity: 0
                },
                {
                    layer: 'WDFW Ambassador Locations',
                    opacity: 0
                },
		{
                    layer: 'MLH work locations',
                    opacity: 0
                },
                {
                    layer: 'Snoquera and Teanaway',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'Spokane Projects',
                    opacity: 0
                },
                {
                    layer: 'Mica Peak to Liberty Lake Traverse',
                    opacity: 0
                },
                {
                    layer: 'Saltese Ridge Reroute',
                    opacity: 0
                },
                {
                    layer: 'Etter Ranch',
                    opacity: 0
                },
                {
                    layer: 'Silver Star THs',
                    opacity: 0
                },
                {
                    layer: 'Bluff Mountain/Yacolt Burn WTA Trails',
                    opacity: 0
                },
                {
                    layer: 'WDFW Ambassador Locations',
                    opacity: 0
                },
		{
                    layer: 'MLH work locations',
                    opacity: 0
                },
                {
                    layer: 'Snoquera and Teanaway',
                    opacity: 0
                },
            ],
        },
        {
            id: 'Conclusion',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: "Washington's trail system requires constant focus and attention to keep it top tier. But it's not just about trail work. To truly reboot trails, WTA needs advocates to speak up for areas they want preserved; stewards to volunteer as ambassadors AND trail workers; and hikers like you to see themselves as an active part of making WTA's trails welcoming and a pleasant place to be.",
            location: {
                center: [45.8332, -122.3842],
                zoom: 4,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
               
                {
                    layer: 'Spokane Projects',
                    opacity: 0
                },
                {
                    layer: 'Mica Peak to Liberty Lake Traverse',
                    opacity: 0
                },
                {
                    layer: 'Saltese Ridge Reroute',
                    opacity: 0
                },
                {
                    layer: 'Etter Ranch',
                    opacity: 0
                },
                {
                    layer: 'Silver Star THs',
                    opacity: 0
                },
                {
                    layer: 'Bluff Mountain/Yacolt Burn WTA Trails',
                    opacity: 0
                },
                {
                    layer: 'WDFW Ambassador Locations',
                    opacity: 0
                },
		{
                    layer: 'MLH work locations',
                    opacity: 0
                },
                {
                    layer: 'Snoquera and Teanaway',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'Spokane Projects',
                    opacity: 0
                },
                {
                    layer: 'Mica Peak to Liberty Lake Traverse',
                    opacity: 0
                },
                {
                    layer: 'Saltese Ridge Reroute',
                    opacity: 0
                },
                {
                    layer: 'Etter Ranch',
                    opacity: 0
                },
                {
                    layer: 'Silver Star THs',
                    opacity: 0
                },
                {
                    layer: 'Bluff Mountain/Yacolt Burn WTA Trails',
                    opacity: 0
                },
                {
                    layer: 'WDFW Ambassador Locations',
                    opacity: 0
                },
		{
                    layer: 'MLH work locations',
                    opacity: 0
                },
                {
                    layer: 'Snoquera and Teanaway',
                    opacity: 0
                },
            ]

} 
]       
}
