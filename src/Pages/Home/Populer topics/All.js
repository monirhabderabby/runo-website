import React from 'react';
import { useQuery } from 'react-query';
import BlogCard from '../../../Shared/BlogCard';

const All = () => {
    const data = [
        {
            "title": "Anti-Crypto Hacking Hotline Established by Blockchain Research Firm Chainalysis",
            "post": "In a bid to mitigate risks from crypto hacking attempts, blockchain research firm Chainalysis has launched a hotline to accept reports of such events. If entities are approached with suspicious crypto payment requests from strangers, they can call up this hotline and register their alerts. The phoneline will be functional 24x7 and user- grievances around the theft, code exploit, or ransomware attack will be noted. Chainalysis is taking this decision to bring a hotline to flag crypto hacks amid rising number of cases around the world.In a blog-post titled ‘Crypto Incident Response', Chainalysis said that hackers caused thefts and damages of up to $3 billion (roughly Rs. 23,486 crore) from 251 attacks in 2021.'That's why today we're launching Crypto Incident Response, a rapid response service for organisations that have been targeted by a cyber-attack or unauthorised network intrusion that involves a cryptocurrency theft or demand,' the research firm wrote in its post.",
            "img": "https://i.gadgets360cdn.com/large/hacked_pixabay_Gerd_Altmann_large_1647946427234.jpg?downsize=950:*",
            "writter": "Radhika Parashar",
            "post_date": "23 June 2022",
            "category": "Technology"
        },
        {
            "title": "Adrian Ballinger Makes First Ski Descent of Makalu",
            "post": "In addition to founding Alpenglow, Ballinger has been one of the top alpinists over the past few years. He and his team have led the way in using oxygen tents as part of their training and pre-acclimatization, allowing clients to spend less time on the mountain and still achieve their summit goals. This approach has been so successful in fact that other outfitters have begun to adopt it as well, with more climbers now arriving on the big 8000-meter peaks more prepared for the challenges.As for Adrian himself, he has made 18 ascents of 8000-meter peaks, including climbing Everest on eight separate occasions. On one occasion he summited that mountain without the use of bottled oxygen and he has a no-Os ascent of K2 on his resume as well. Unsurprisingly, he also loves the challenge of skiing on these big mountains, becoming the first person to make a ski descent of Manaslu, the 8th highest peak on the planet.",
            "img": "https://adventureblog.net/wp-content/uploads/2022/05/adrian-ballenger-makalu-1.jpg",
            "writter": "Kraig Becker",
            "post_date": "17, 2022",
            "category": "Adventure"
        },
        {
            "title": "ALASKA – CANOEING TO THE BERING SEA",
            "post": "To this day, it serves as the main artery for the villages in the heart of Alaska with no access to roads. The river became legendary during the gold rush in the nineteenth century, and it gained a mythical status through the novels of Jack London, Robert Service and Pierre Berton. This is my third journey to the Bering Sea along the Big River, and once again I’m back in the birch bark canoe I made for my solo trip a couple of years ago. But this time, instead of starting my journey at the Yukon’s headlakes in Canada, I’m setting off from a colossal structure in the heart of Alaska.I want to camp on river islands whenever I can on this trip. These islands offer the best protection against mosquitoes and bears. They’re usually too windy for the former and too uninteresting for the latter, or so canoeists naively believe.I can most definitely say I have no desire to encounter members of either species. A nice bear photo would be great – with a telephoto lens, of course.But what I really want to focus on are the villages along the river. I’m fascinated by the lifestyle and I want to document how the villagers live. So on I go, and three days later, I find myself at an important intersection in the remote Nordic wilderness.",
            "img": "http://en.travelepisodes.com/wp-content/uploads/2016/12/JA6B0606-Edit-1024x683.jpg",
            "writter": "Kraig Becker",
            "post_date": "17, 2022",
            "category": "Travel"
        },
        {
            "title": "World Branding Awards Returns with Royal Style",
            "post": "After a long COVID related hiatus, the World Branding Forums’ Brand of the Year Awards will return to Kensington Palace, London in November 2022.The 2022-2023 World Branding Awards is set to be the largest gathering of the world’s best brands and will acknowledge their dedication and hard work at the world’s most prestigious ceremony, set amongst illustrious surroundings. The Brand of the Year celebration will take place this November at Kensington Palace. The Palace, most recently in the media as part of the Monarchs Jubilee celebrations, is a prized working Royal residence that has been a part of the British Royal Family since the 17th century. The Palace has been home to the Brand of the Year awards since its inception in 2014 and offers an opulent setting for the winners to celebrate their remarkable achievement”, says World Branding Forums’ Chief Executive Officer – Mr Danny Pek. Brands are selected as winners through a carefully created voting and evaluation process, focused at the consumers preferences. This means that the Brand of the Year award really is the only accolade with the consumers choice at the forefront of the selection. Members of the public still have the opportunity to nominate and vote for their favourite brands via this free online survey. The voting period for this edition of the Brand of the Year awards will close at the end of June, so make sure you vote soon to see your favourite brand named as the Brand of the Year!",
            "img": "https://i0.wp.com/brandingforum.org/wp-content/uploads/2022/06/twobytwo_World_Branding_Awards_2019_0258-scaled.jpg?w=1392&ssl=1",
            "writter": "Kira Heather",
            "post_date": "June 22, 2022",
            "category": "Branding"
        }
    
    ]

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            {
                data.map(blog=> <BlogCard key={"blog.title"} blog={blog} />)
            }
            </div>
        </div>
    );
};

export default All;