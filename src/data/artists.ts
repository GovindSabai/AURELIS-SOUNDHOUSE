import type { Track } from '../context/AudioContext';

export interface AlbumTrack {
  id: string;
  title: string;
  durationStr: string;
}

export interface CommunityPost {
  id: string;
  date: string;
  content: string;
  likes: number;
  comments: number;
}

export interface Artist {
  id: string;
  slug: string;
  name: string;
  genre: string;
  isVerified: boolean;
  followers: number;
  following?: number;
  location: string;
  bio: string;
  image: string;
  banner: string;
  memberSince: string;
  influences: string[];
  socials: {
    instagram?: string;
    twitter?: string;
    soundcloud?: string;
  };
  albumTracks: AlbumTrack[];
  communityPosts: CommunityPost[];
}

export const GENRES = [
  { name: 'Electronic', color: 'from-cyan-500 to-blue-500' },
  { name: 'Hip-Hop', color: 'from-orange-500 to-red-500' },
  { name: 'Indie', color: 'from-green-500 to-emerald-500' },
  { name: 'Lo-Fi', color: 'from-amber-500 to-orange-500' },
  { name: 'Pop', color: 'from-pink-500 to-rose-500' },
  { name: 'R&B', color: 'from-violet-500 to-purple-500' },
  { name: 'Rock', color: 'from-red-500 to-rose-900' },
  { name: 'Ambient', color: 'from-teal-500 to-cyan-500' },
  { name: 'Cinematic', color: 'from-slate-500 to-gray-500' },
  { name: 'Trap', color: 'from-yellow-500 to-orange-500' },
  { name: 'Jazz', color: 'from-amber-700 to-yellow-900' },
  { name: 'Experimental', color: 'from-fuchsia-500 to-purple-800' }
];

export const MOODS = [
  'Energetic', 'Chill', 'Focus', 'Late Night', 'Workout', 'Melancholy'
];

export const ARTISTS: Artist[] = [
  {
    "slug": "nova-ray",
    "name": "Elena Rostova",
    "genre": "Electronic",
    "isVerified": true,
    "followers": 450000,
    "location": "London, UK",
    "influences": [
      "Massive Attack",
      "FKA twigs"
    ],
    "id": "a1",
    "bio": "A groundbreaking artist in the Electronic scene, Elena Rostova continues to push sonic boundaries. Known for unforgettable live performances and intricate studio productions, they have captivated audiences worldwide. Their journey began in London, where early experiments with sound quickly gained traction in the underground scene. Today, Elena Rostova stands as a pillar of modern music, seamlessly blending raw emotion with cutting-edge production techniques to create soundscapes that resonate on a global scale.",
    "image": "https://randomuser.me/api/portraits/women/10.jpg",
    "banner": "https://picsum.photos/seed/nova-ray-banner/2000/800",
    "memberSince": "2020",
    "socials": {
      "instagram": "@nova-ray"
    },
    "albumTracks": [
      {
        "id": "album_t_nova-ray_0",
        "title": "Echoes of Elena",
        "durationStr": "02:48",
        "audioUrl": "/audio/moodmode-no-copyright-music-201745.mp3"
      },
      {
        "id": "album_t_nova-ray_1",
        "title": "Shadows of Elena",
        "durationStr": "03:44",
        "audioUrl": "/audio/alex-morgan-no-copyright-music-578487.mp3"
      },
      {
        "id": "album_t_nova-ray_2",
        "title": "Light in Elena",
        "durationStr": "02:47",
        "audioUrl": "/audio/prettyjohn1-lofi-lofi-music-587176.mp3"
      },
      {
        "id": "album_t_nova-ray_3",
        "title": "Visions from Elena",
        "durationStr": "03:00",
        "audioUrl": "/audio/sub_clair-electronic-586100.mp3"
      },
      {
        "id": "album_t_nova-ray_4",
        "title": "Journey to Elena",
        "durationStr": "02:29",
        "audioUrl": "/audio/mfcc-no-copyright-music-261601.mp3"
      }
    ],
    "communityPosts": [
      {
        "id": "post_nova-ray_1",
        "date": "2 days ago",
        "content": "Just wrapped up the final mix for the new record. Cannot wait to share this with you all. 🎛️✨",
        "likes": 450,
        "comments": 23
      },
      {
        "id": "post_nova-ray_2",
        "date": "1 week ago",
        "content": "Thank you for the incredible energy last night. You guys were insane! 🔥",
        "likes": 1200,
        "comments": 89
      },
      {
        "id": "post_nova-ray_3",
        "date": "2 weeks ago",
        "content": "Studio sessions have been incredibly productive. The new sound is evolving into something entirely unexpected.",
        "likes": 310,
        "comments": 14
      },
      {
        "id": "post_nova-ray_4",
        "date": "1 month ago",
        "content": "Flashback to the first time we played this track live. The crowd reaction still gives me chills.",
        "likes": 890,
        "comments": 56
      }
    ]
  },
  {
    "slug": "kairo",
    "name": "Marcus Johnson",
    "genre": "Hip-Hop",
    "isVerified": true,
    "followers": 89000,
    "location": "Atlanta, USA",
    "influences": [
      "Outkast",
      "J Dilla"
    ],
    "id": "a2",
    "bio": "A groundbreaking artist in the Hip-Hop scene, Marcus Johnson continues to push sonic boundaries. Known for unforgettable live performances and intricate studio productions, they have captivated audiences worldwide. Their journey began in Atlanta, where early experiments with sound quickly gained traction in the underground scene. Today, Marcus Johnson stands as a pillar of modern music, seamlessly blending raw emotion with cutting-edge production techniques to create soundscapes that resonate on a global scale.",
    "image": "https://randomuser.me/api/portraits/men/11.jpg",
    "banner": "https://picsum.photos/seed/kairo-banner/2000/800",
    "memberSince": "2020",
    "socials": {
      "instagram": "@kairo"
    },
    "albumTracks": [
      {
        "id": "album_t_kairo_0",
        "title": "Echoes of Marcus",
        "durationStr": "02:55",
        "audioUrl": "/audio/alex-morgan-no-copyright-music-578487.mp3"
      },
      {
        "id": "album_t_kairo_1",
        "title": "Shadows of Marcus",
        "durationStr": "03:31",
        "audioUrl": "/audio/prettyjohn1-lofi-lofi-music-587176.mp3"
      },
      {
        "id": "album_t_kairo_2",
        "title": "Light in Marcus",
        "durationStr": "02:48",
        "audioUrl": "/audio/sigmamusicart-no-copyright-music-537751.mp3"
      },
      {
        "id": "album_t_kairo_3",
        "title": "Visions from Marcus",
        "durationStr": "02:32",
        "audioUrl": "/audio/moodmode-no-copyright-music-201745.mp3"
      },
      {
        "id": "album_t_kairo_4",
        "title": "Journey to Marcus",
        "durationStr": "03:03",
        "audioUrl": "/audio/mfcc-no-copyright-music-261601.mp3"
      }
    ],
    "communityPosts": [
      {
        "id": "post_kairo_1",
        "date": "2 days ago",
        "content": "Just wrapped up the final mix for the new record. Cannot wait to share this with you all. 🎛️✨",
        "likes": 450,
        "comments": 23
      },
      {
        "id": "post_kairo_2",
        "date": "1 week ago",
        "content": "Thank you for the incredible energy last night. You guys were insane! 🔥",
        "likes": 1200,
        "comments": 89
      },
      {
        "id": "post_kairo_3",
        "date": "2 weeks ago",
        "content": "Studio sessions have been incredibly productive. The new sound is evolving into something entirely unexpected.",
        "likes": 310,
        "comments": 14
      },
      {
        "id": "post_kairo_4",
        "date": "1 month ago",
        "content": "Flashback to the first time we played this track live. The crowd reaction still gives me chills.",
        "likes": 890,
        "comments": 56
      }
    ]
  },
  {
    "slug": "echo-v",
    "name": "David Chen",
    "genre": "Indie",
    "isVerified": false,
    "followers": 12400,
    "location": "Melbourne, AU",
    "influences": [
      "Tame Impala",
      "Beach House"
    ],
    "id": "a3",
    "bio": "A groundbreaking artist in the Indie scene, David Chen continues to push sonic boundaries. Known for unforgettable live performances and intricate studio productions, they have captivated audiences worldwide. Their journey began in Melbourne, where early experiments with sound quickly gained traction in the underground scene. Today, David Chen stands as a pillar of modern music, seamlessly blending raw emotion with cutting-edge production techniques to create soundscapes that resonate on a global scale.",
    "image": "https://randomuser.me/api/portraits/women/12.jpg",
    "banner": "https://picsum.photos/seed/echo-v-banner/2000/800",
    "memberSince": "2020",
    "socials": {
      "instagram": "@echo-v"
    },
    "albumTracks": [
      {
        "id": "album_t_echo-v_0",
        "title": "Echoes of David",
        "durationStr": "03:11",
        "audioUrl": "/audio/joyinsound-no-copyright-chill-music-403411.mp3"
      },
      {
        "id": "album_t_echo-v_1",
        "title": "Shadows of David",
        "durationStr": "03:54",
        "audioUrl": "/audio/sigmamusicart-no-copyright-music-537751.mp3"
      },
      {
        "id": "album_t_echo-v_2",
        "title": "Light in David",
        "durationStr": "03:45",
        "audioUrl": "/audio/audiocoffee-motivational-sport-rock-no-copyright-music-578087.mp3"
      },
      {
        "id": "album_t_echo-v_3",
        "title": "Visions from David",
        "durationStr": "03:05",
        "audioUrl": "/audio/audiocoffee-motivational-sport-rock-no-copyright-music-578087.mp3"
      },
      {
        "id": "album_t_echo-v_4",
        "title": "Journey to David",
        "durationStr": "02:48",
        "audioUrl": "/audio/prettyjohn1-lofi-lofi-music-587176.mp3"
      }
    ],
    "communityPosts": [
      {
        "id": "post_echo-v_1",
        "date": "2 days ago",
        "content": "Just wrapped up the final mix for the new record. Cannot wait to share this with you all. 🎛️✨",
        "likes": 450,
        "comments": 23
      },
      {
        "id": "post_echo-v_2",
        "date": "1 week ago",
        "content": "Thank you for the incredible energy last night. You guys were insane! 🔥",
        "likes": 1200,
        "comments": 89
      },
      {
        "id": "post_echo-v_3",
        "date": "2 weeks ago",
        "content": "Studio sessions have been incredibly productive. The new sound is evolving into something entirely unexpected.",
        "likes": 310,
        "comments": 14
      },
      {
        "id": "post_echo-v_4",
        "date": "1 month ago",
        "content": "Flashback to the first time we played this track live. The crowd reaction still gives me chills.",
        "likes": 890,
        "comments": 56
      }
    ]
  },
  {
    "slug": "luma-vale",
    "name": "Sophia Williams",
    "genre": "Ambient",
    "isVerified": false,
    "followers": 8500,
    "location": "Reykjavik, IS",
    "influences": [
      "Brian Eno",
      "Sigur Rós"
    ],
    "id": "a4",
    "bio": "A groundbreaking artist in the Ambient scene, Sophia Williams continues to push sonic boundaries. Known for unforgettable live performances and intricate studio productions, they have captivated audiences worldwide. Their journey began in Reykjavik, where early experiments with sound quickly gained traction in the underground scene. Today, Sophia Williams stands as a pillar of modern music, seamlessly blending raw emotion with cutting-edge production techniques to create soundscapes that resonate on a global scale.",
    "image": "https://randomuser.me/api/portraits/men/13.jpg",
    "banner": "https://picsum.photos/seed/luma-vale-banner/2000/800",
    "memberSince": "2020",
    "socials": {
      "instagram": "@luma-vale"
    },
    "albumTracks": [
      {
        "id": "album_t_luma-vale_0",
        "title": "Echoes of Sophia",
        "durationStr": "02:21",
        "audioUrl": "/audio/audiocoffee-motivational-sport-rock-no-copyright-music-578087.mp3"
      },
      {
        "id": "album_t_luma-vale_1",
        "title": "Shadows of Sophia",
        "durationStr": "03:19",
        "audioUrl": "/audio/alex-morgan-no-copyright-music-528321.mp3"
      },
      {
        "id": "album_t_luma-vale_2",
        "title": "Light in Sophia",
        "durationStr": "02:03",
        "audioUrl": "/audio/mfcc-no-copyright-music-261601.mp3"
      },
      {
        "id": "album_t_luma-vale_3",
        "title": "Visions from Sophia",
        "durationStr": "02:01",
        "audioUrl": "/audio/moodmode-no-copyright-music-201745.mp3"
      },
      {
        "id": "album_t_luma-vale_4",
        "title": "Journey to Sophia",
        "durationStr": "02:17",
        "audioUrl": "/audio/prettyjohn1-lofi-lofi-music-587176.mp3"
      }
    ],
    "communityPosts": [
      {
        "id": "post_luma-vale_1",
        "date": "2 days ago",
        "content": "Just wrapped up the final mix for the new record. Cannot wait to share this with you all. 🎛️✨",
        "likes": 450,
        "comments": 23
      },
      {
        "id": "post_luma-vale_2",
        "date": "1 week ago",
        "content": "Thank you for the incredible energy last night. You guys were insane! 🔥",
        "likes": 1200,
        "comments": 89
      },
      {
        "id": "post_luma-vale_3",
        "date": "2 weeks ago",
        "content": "Studio sessions have been incredibly productive. The new sound is evolving into something entirely unexpected.",
        "likes": 310,
        "comments": 14
      },
      {
        "id": "post_luma-vale_4",
        "date": "1 month ago",
        "content": "Flashback to the first time we played this track live. The crowd reaction still gives me chills.",
        "likes": 890,
        "comments": 56
      }
    ]
  },
  {
    "slug": "arin-wave",
    "name": "Arin Patel",
    "genre": "Pop",
    "isVerified": true,
    "followers": 1200000,
    "location": "Los Angeles, USA",
    "influences": [
      "Robyn",
      "Charli XCX"
    ],
    "id": "a5",
    "bio": "A groundbreaking artist in the Pop scene, Arin Patel continues to push sonic boundaries. Known for unforgettable live performances and intricate studio productions, they have captivated audiences worldwide. Their journey began in Los Angeles, where early experiments with sound quickly gained traction in the underground scene. Today, Arin Patel stands as a pillar of modern music, seamlessly blending raw emotion with cutting-edge production techniques to create soundscapes that resonate on a global scale.",
    "image": "https://randomuser.me/api/portraits/women/14.jpg",
    "banner": "https://picsum.photos/seed/arin-wave-banner/2000/800",
    "memberSince": "2020",
    "socials": {
      "instagram": "@arin-wave"
    },
    "albumTracks": [
      {
        "id": "album_t_arin-wave_0",
        "title": "Echoes of Arin",
        "durationStr": "03:27",
        "audioUrl": "/audio/prettyjohn1-lofi-lofi-music-587176.mp3"
      },
      {
        "id": "album_t_arin-wave_1",
        "title": "Shadows of Arin",
        "durationStr": "03:20",
        "audioUrl": "/audio/alex-morgan-no-copyright-music-528321.mp3"
      },
      {
        "id": "album_t_arin-wave_2",
        "title": "Light in Arin",
        "durationStr": "02:36",
        "audioUrl": "/audio/alex-morgan-no-copyright-music-528321.mp3"
      },
      {
        "id": "album_t_arin-wave_3",
        "title": "Visions from Arin",
        "durationStr": "02:36",
        "audioUrl": "/audio/audiocoffee-motivational-sport-rock-no-copyright-music-578087.mp3"
      },
      {
        "id": "album_t_arin-wave_4",
        "title": "Journey to Arin",
        "durationStr": "03:17",
        "audioUrl": "/audio/audiocoffee-motivational-sport-rock-no-copyright-music-578087.mp3"
      }
    ],
    "communityPosts": [
      {
        "id": "post_arin-wave_1",
        "date": "2 days ago",
        "content": "Just wrapped up the final mix for the new record. Cannot wait to share this with you all. 🎛️✨",
        "likes": 450,
        "comments": 23
      },
      {
        "id": "post_arin-wave_2",
        "date": "1 week ago",
        "content": "Thank you for the incredible energy last night. You guys were insane! 🔥",
        "likes": 1200,
        "comments": 89
      },
      {
        "id": "post_arin-wave_3",
        "date": "2 weeks ago",
        "content": "Studio sessions have been incredibly productive. The new sound is evolving into something entirely unexpected.",
        "likes": 310,
        "comments": 14
      },
      {
        "id": "post_arin-wave_4",
        "date": "1 month ago",
        "content": "Flashback to the first time we played this track live. The crowd reaction still gives me chills.",
        "likes": 890,
        "comments": 56
      }
    ]
  },
  {
    "slug": "soul-mechanic",
    "name": "Jamal Davis",
    "genre": "R&B",
    "isVerified": true,
    "followers": 320000,
    "location": "Toronto, CA",
    "influences": [
      "D'Angelo",
      "Frank Ocean"
    ],
    "id": "a6",
    "bio": "A groundbreaking artist in the R&B scene, Jamal Davis continues to push sonic boundaries. Known for unforgettable live performances and intricate studio productions, they have captivated audiences worldwide. Their journey began in Toronto, where early experiments with sound quickly gained traction in the underground scene. Today, Jamal Davis stands as a pillar of modern music, seamlessly blending raw emotion with cutting-edge production techniques to create soundscapes that resonate on a global scale.",
    "image": "https://randomuser.me/api/portraits/men/15.jpg",
    "banner": "https://picsum.photos/seed/soul-mechanic-banner/2000/800",
    "memberSince": "2020",
    "socials": {
      "instagram": "@soul-mechanic"
    },
    "albumTracks": [
      {
        "id": "album_t_soul-mechanic_0",
        "title": "Echoes of Jamal",
        "durationStr": "02:16",
        "audioUrl": "/audio/mfcc-no-copyright-music-261601.mp3"
      },
      {
        "id": "album_t_soul-mechanic_1",
        "title": "Shadows of Jamal",
        "durationStr": "02:21",
        "audioUrl": "/audio/sigmamusicart-no-copyright-music-446509.mp3"
      },
      {
        "id": "album_t_soul-mechanic_2",
        "title": "Light in Jamal",
        "durationStr": "02:27",
        "audioUrl": "/audio/joyinsound-no-copyright-chill-music-403411.mp3"
      },
      {
        "id": "album_t_soul-mechanic_3",
        "title": "Visions from Jamal",
        "durationStr": "02:45",
        "audioUrl": "/audio/sub_clair-electronic-586100.mp3"
      },
      {
        "id": "album_t_soul-mechanic_4",
        "title": "Journey to Jamal",
        "durationStr": "02:08",
        "audioUrl": "/audio/mfcc-no-copyright-music-261601.mp3"
      }
    ],
    "communityPosts": [
      {
        "id": "post_soul-mechanic_1",
        "date": "2 days ago",
        "content": "Just wrapped up the final mix for the new record. Cannot wait to share this with you all. 🎛️✨",
        "likes": 450,
        "comments": 23
      },
      {
        "id": "post_soul-mechanic_2",
        "date": "1 week ago",
        "content": "Thank you for the incredible energy last night. You guys were insane! 🔥",
        "likes": 1200,
        "comments": 89
      },
      {
        "id": "post_soul-mechanic_3",
        "date": "2 weeks ago",
        "content": "Studio sessions have been incredibly productive. The new sound is evolving into something entirely unexpected.",
        "likes": 310,
        "comments": 14
      },
      {
        "id": "post_soul-mechanic_4",
        "date": "1 month ago",
        "content": "Flashback to the first time we played this track live. The crowd reaction still gives me chills.",
        "likes": 890,
        "comments": 56
      }
    ]
  },
  {
    "slug": "neon-sky",
    "name": "Ryan Miller",
    "genre": "Synthwave",
    "isVerified": false,
    "followers": 78000,
    "location": "Miami, USA",
    "influences": [
      "Kavinsky",
      "The Midnight"
    ],
    "id": "a7",
    "bio": "A groundbreaking artist in the Synthwave scene, Ryan Miller continues to push sonic boundaries. Known for unforgettable live performances and intricate studio productions, they have captivated audiences worldwide. Their journey began in Miami, where early experiments with sound quickly gained traction in the underground scene. Today, Ryan Miller stands as a pillar of modern music, seamlessly blending raw emotion with cutting-edge production techniques to create soundscapes that resonate on a global scale.",
    "image": "https://randomuser.me/api/portraits/women/16.jpg",
    "banner": "https://picsum.photos/seed/neon-sky-banner/2000/800",
    "memberSince": "2020",
    "socials": {
      "instagram": "@neon-sky"
    },
    "albumTracks": [
      {
        "id": "album_t_neon-sky_0",
        "title": "Echoes of Ryan",
        "durationStr": "03:12",
        "audioUrl": "/audio/sub_clair-electronic-586100.mp3"
      },
      {
        "id": "album_t_neon-sky_1",
        "title": "Shadows of Ryan",
        "durationStr": "02:53",
        "audioUrl": "/audio/mfcc-no-copyright-music-261601.mp3"
      },
      {
        "id": "album_t_neon-sky_2",
        "title": "Light in Ryan",
        "durationStr": "02:09",
        "audioUrl": "/audio/sigmamusicart-no-copyright-music-537751.mp3"
      },
      {
        "id": "album_t_neon-sky_3",
        "title": "Visions from Ryan",
        "durationStr": "02:58",
        "audioUrl": "/audio/audiocoffee-motivational-sport-rock-no-copyright-music-578087.mp3"
      },
      {
        "id": "album_t_neon-sky_4",
        "title": "Journey to Ryan",
        "durationStr": "03:12",
        "audioUrl": "/audio/sub_clair-electronic-586100.mp3"
      }
    ],
    "communityPosts": [
      {
        "id": "post_neon-sky_1",
        "date": "2 days ago",
        "content": "Just wrapped up the final mix for the new record. Cannot wait to share this with you all. 🎛️✨",
        "likes": 450,
        "comments": 23
      },
      {
        "id": "post_neon-sky_2",
        "date": "1 week ago",
        "content": "Thank you for the incredible energy last night. You guys were insane! 🔥",
        "likes": 1200,
        "comments": 89
      },
      {
        "id": "post_neon-sky_3",
        "date": "2 weeks ago",
        "content": "Studio sessions have been incredibly productive. The new sound is evolving into something entirely unexpected.",
        "likes": 310,
        "comments": 14
      },
      {
        "id": "post_neon-sky_4",
        "date": "1 month ago",
        "content": "Flashback to the first time we played this track live. The crowd reaction still gives me chills.",
        "likes": 890,
        "comments": 56
      }
    ]
  },
  {
    "slug": "lyra-frost",
    "name": "Lyra Anderson",
    "genre": "Pop",
    "isVerified": true,
    "followers": 410000,
    "location": "Stockholm, SE",
    "influences": [
      "Robyn",
      "Tove Lo"
    ],
    "id": "a8",
    "bio": "A groundbreaking artist in the Pop scene, Lyra Anderson continues to push sonic boundaries. Known for unforgettable live performances and intricate studio productions, they have captivated audiences worldwide. Their journey began in Stockholm, where early experiments with sound quickly gained traction in the underground scene. Today, Lyra Anderson stands as a pillar of modern music, seamlessly blending raw emotion with cutting-edge production techniques to create soundscapes that resonate on a global scale.",
    "image": "https://randomuser.me/api/portraits/men/17.jpg",
    "banner": "https://picsum.photos/seed/lyra-frost-banner/2000/800",
    "memberSince": "2020",
    "socials": {
      "instagram": "@lyra-frost"
    },
    "albumTracks": [
      {
        "id": "album_t_lyra-frost_0",
        "title": "Echoes of Lyra",
        "durationStr": "03:47",
        "audioUrl": "/audio/sigmamusicart-no-copyright-music-446509.mp3"
      },
      {
        "id": "album_t_lyra-frost_1",
        "title": "Shadows of Lyra",
        "durationStr": "03:50",
        "audioUrl": "/audio/audiocoffee-motivational-sport-rock-no-copyright-music-578087.mp3"
      },
      {
        "id": "album_t_lyra-frost_2",
        "title": "Light in Lyra",
        "durationStr": "02:35",
        "audioUrl": "/audio/sigmamusicart-no-copyright-music-446509.mp3"
      },
      {
        "id": "album_t_lyra-frost_3",
        "title": "Visions from Lyra",
        "durationStr": "02:10",
        "audioUrl": "/audio/audiocoffee-motivational-sport-rock-no-copyright-music-578087.mp3"
      },
      {
        "id": "album_t_lyra-frost_4",
        "title": "Journey to Lyra",
        "durationStr": "03:12",
        "audioUrl": "/audio/joyinsound-no-copyright-chill-music-403411.mp3"
      }
    ],
    "communityPosts": [
      {
        "id": "post_lyra-frost_1",
        "date": "2 days ago",
        "content": "Just wrapped up the final mix for the new record. Cannot wait to share this with you all. 🎛️✨",
        "likes": 450,
        "comments": 23
      },
      {
        "id": "post_lyra-frost_2",
        "date": "1 week ago",
        "content": "Thank you for the incredible energy last night. You guys were insane! 🔥",
        "likes": 1200,
        "comments": 89
      },
      {
        "id": "post_lyra-frost_3",
        "date": "2 weeks ago",
        "content": "Studio sessions have been incredibly productive. The new sound is evolving into something entirely unexpected.",
        "likes": 310,
        "comments": 14
      },
      {
        "id": "post_lyra-frost_4",
        "date": "1 month ago",
        "content": "Flashback to the first time we played this track live. The crowd reaction still gives me chills.",
        "likes": 890,
        "comments": 56
      }
    ]
  },
  {
    "slug": "dj-phantom",
    "name": "Thomas Wright",
    "genre": "Electronic",
    "isVerified": false,
    "followers": 89000,
    "location": "Detroit, USA",
    "influences": [
      "Carl Craig",
      "Jeff Mills"
    ],
    "id": "a9",
    "bio": "A groundbreaking artist in the Electronic scene, Thomas Wright continues to push sonic boundaries. Known for unforgettable live performances and intricate studio productions, they have captivated audiences worldwide. Their journey began in Detroit, where early experiments with sound quickly gained traction in the underground scene. Today, Thomas Wright stands as a pillar of modern music, seamlessly blending raw emotion with cutting-edge production techniques to create soundscapes that resonate on a global scale.",
    "image": "https://randomuser.me/api/portraits/women/18.jpg",
    "banner": "https://picsum.photos/seed/dj-phantom-banner/2000/800",
    "memberSince": "2020",
    "socials": {
      "instagram": "@dj-phantom"
    },
    "albumTracks": [
      {
        "id": "album_t_dj-phantom_0",
        "title": "Echoes of Thomas",
        "durationStr": "02:28",
        "audioUrl": "/audio/alex-morgan-no-copyright-music-528321.mp3"
      },
      {
        "id": "album_t_dj-phantom_1",
        "title": "Shadows of Thomas",
        "durationStr": "03:18",
        "audioUrl": "/audio/sigmamusicart-no-copyright-music-446509.mp3"
      },
      {
        "id": "album_t_dj-phantom_2",
        "title": "Light in Thomas",
        "durationStr": "02:29",
        "audioUrl": "/audio/alex-morgan-no-copyright-music-528321.mp3"
      },
      {
        "id": "album_t_dj-phantom_3",
        "title": "Visions from Thomas",
        "durationStr": "02:42",
        "audioUrl": "/audio/mfcc-no-copyright-music-261601.mp3"
      },
      {
        "id": "album_t_dj-phantom_4",
        "title": "Journey to Thomas",
        "durationStr": "03:38",
        "audioUrl": "/audio/alex-morgan-no-copyright-music-578487.mp3"
      }
    ],
    "communityPosts": [
      {
        "id": "post_dj-phantom_1",
        "date": "2 days ago",
        "content": "Just wrapped up the final mix for the new record. Cannot wait to share this with you all. 🎛️✨",
        "likes": 450,
        "comments": 23
      },
      {
        "id": "post_dj-phantom_2",
        "date": "1 week ago",
        "content": "Thank you for the incredible energy last night. You guys were insane! 🔥",
        "likes": 1200,
        "comments": 89
      },
      {
        "id": "post_dj-phantom_3",
        "date": "2 weeks ago",
        "content": "Studio sessions have been incredibly productive. The new sound is evolving into something entirely unexpected.",
        "likes": 310,
        "comments": 14
      },
      {
        "id": "post_dj-phantom_4",
        "date": "1 month ago",
        "content": "Flashback to the first time we played this track live. The crowd reaction still gives me chills.",
        "likes": 890,
        "comments": 56
      }
    ]
  },
  {
    "slug": "the-wanderers",
    "name": "The Harrison Bros",
    "genre": "Indie",
    "isVerified": true,
    "followers": 150000,
    "location": "Melbourne, AU",
    "influences": [
      "Ocean Alley",
      "Sticky Fingers"
    ],
    "id": "a10",
    "bio": "A groundbreaking artist in the Indie scene, The Harrison Bros continues to push sonic boundaries. Known for unforgettable live performances and intricate studio productions, they have captivated audiences worldwide. Their journey began in Melbourne, where early experiments with sound quickly gained traction in the underground scene. Today, The Harrison Bros stands as a pillar of modern music, seamlessly blending raw emotion with cutting-edge production techniques to create soundscapes that resonate on a global scale.",
    "image": "https://randomuser.me/api/portraits/men/19.jpg",
    "banner": "https://picsum.photos/seed/the-wanderers-banner/2000/800",
    "memberSince": "2020",
    "socials": {
      "instagram": "@the-wanderers"
    },
    "albumTracks": [
      {
        "id": "album_t_the-wanderers_0",
        "title": "Echoes of The",
        "durationStr": "03:29",
        "audioUrl": "/audio/prettyjohn1-lofi-lofi-music-587176.mp3"
      },
      {
        "id": "album_t_the-wanderers_1",
        "title": "Shadows of The",
        "durationStr": "03:14",
        "audioUrl": "/audio/joyinsound-no-copyright-chill-music-403411.mp3"
      },
      {
        "id": "album_t_the-wanderers_2",
        "title": "Light in The",
        "durationStr": "03:51",
        "audioUrl": "/audio/alex-morgan-no-copyright-music-578487.mp3"
      },
      {
        "id": "album_t_the-wanderers_3",
        "title": "Visions from The",
        "durationStr": "03:05",
        "audioUrl": "/audio/joyinsound-no-copyright-chill-music-403411.mp3"
      },
      {
        "id": "album_t_the-wanderers_4",
        "title": "Journey to The",
        "durationStr": "03:13",
        "audioUrl": "/audio/alex-morgan-no-copyright-music-528321.mp3"
      }
    ],
    "communityPosts": [
      {
        "id": "post_the-wanderers_1",
        "date": "2 days ago",
        "content": "Just wrapped up the final mix for the new record. Cannot wait to share this with you all. 🎛️✨",
        "likes": 450,
        "comments": 23
      },
      {
        "id": "post_the-wanderers_2",
        "date": "1 week ago",
        "content": "Thank you for the incredible energy last night. You guys were insane! 🔥",
        "likes": 1200,
        "comments": 89
      },
      {
        "id": "post_the-wanderers_3",
        "date": "2 weeks ago",
        "content": "Studio sessions have been incredibly productive. The new sound is evolving into something entirely unexpected.",
        "likes": 310,
        "comments": 14
      },
      {
        "id": "post_the-wanderers_4",
        "date": "1 month ago",
        "content": "Flashback to the first time we played this track live. The crowd reaction still gives me chills.",
        "likes": 890,
        "comments": 56
      }
    ]
  },
  {
    "slug": "silk-road",
    "name": "Aisha Khan",
    "genre": "R&B",
    "isVerified": false,
    "followers": 67000,
    "location": "Toronto, CA",
    "influences": [
      "The Weeknd",
      "PARTYNEXTDOOR"
    ],
    "id": "a11",
    "bio": "A groundbreaking artist in the R&B scene, Aisha Khan continues to push sonic boundaries. Known for unforgettable live performances and intricate studio productions, they have captivated audiences worldwide. Their journey began in Toronto, where early experiments with sound quickly gained traction in the underground scene. Today, Aisha Khan stands as a pillar of modern music, seamlessly blending raw emotion with cutting-edge production techniques to create soundscapes that resonate on a global scale.",
    "image": "https://randomuser.me/api/portraits/women/20.jpg",
    "banner": "https://picsum.photos/seed/silk-road-banner/2000/800",
    "memberSince": "2020",
    "socials": {
      "instagram": "@silk-road"
    },
    "albumTracks": [
      {
        "id": "album_t_silk-road_0",
        "title": "Echoes of Aisha",
        "durationStr": "03:37",
        "audioUrl": "/audio/sigmamusicart-no-copyright-music-446509.mp3"
      },
      {
        "id": "album_t_silk-road_1",
        "title": "Shadows of Aisha",
        "durationStr": "02:11",
        "audioUrl": "/audio/alex-morgan-no-copyright-music-578487.mp3"
      },
      {
        "id": "album_t_silk-road_2",
        "title": "Light in Aisha",
        "durationStr": "03:51",
        "audioUrl": "/audio/joyinsound-no-copyright-chill-music-403411.mp3"
      },
      {
        "id": "album_t_silk-road_3",
        "title": "Visions from Aisha",
        "durationStr": "02:21",
        "audioUrl": "/audio/mfcc-no-copyright-music-261601.mp3"
      },
      {
        "id": "album_t_silk-road_4",
        "title": "Journey to Aisha",
        "durationStr": "03:58",
        "audioUrl": "/audio/sigmamusicart-no-copyright-music-537751.mp3"
      }
    ],
    "communityPosts": [
      {
        "id": "post_silk-road_1",
        "date": "2 days ago",
        "content": "Just wrapped up the final mix for the new record. Cannot wait to share this with you all. 🎛️✨",
        "likes": 450,
        "comments": 23
      },
      {
        "id": "post_silk-road_2",
        "date": "1 week ago",
        "content": "Thank you for the incredible energy last night. You guys were insane! 🔥",
        "likes": 1200,
        "comments": 89
      },
      {
        "id": "post_silk-road_3",
        "date": "2 weeks ago",
        "content": "Studio sessions have been incredibly productive. The new sound is evolving into something entirely unexpected.",
        "likes": 310,
        "comments": 14
      },
      {
        "id": "post_silk-road_4",
        "date": "1 month ago",
        "content": "Flashback to the first time we played this track live. The crowd reaction still gives me chills.",
        "likes": 890,
        "comments": 56
      }
    ]
  },
  {
    "slug": "crimson-tide",
    "name": "Michael Stone",
    "genre": "Rock",
    "isVerified": true,
    "followers": 320000,
    "location": "London, UK",
    "influences": [
      "Royal Blood",
      "Arctic Monkeys"
    ],
    "id": "a12",
    "bio": "A groundbreaking artist in the Rock scene, Michael Stone continues to push sonic boundaries. Known for unforgettable live performances and intricate studio productions, they have captivated audiences worldwide. Their journey began in London, where early experiments with sound quickly gained traction in the underground scene. Today, Michael Stone stands as a pillar of modern music, seamlessly blending raw emotion with cutting-edge production techniques to create soundscapes that resonate on a global scale.",
    "image": "https://randomuser.me/api/portraits/men/21.jpg",
    "banner": "https://picsum.photos/seed/crimson-tide-banner/2000/800",
    "memberSince": "2020",
    "socials": {
      "instagram": "@crimson-tide"
    },
    "albumTracks": [
      {
        "id": "album_t_crimson-tide_0",
        "title": "Echoes of Michael",
        "durationStr": "02:14",
        "audioUrl": "/audio/sub_clair-electronic-586100.mp3"
      },
      {
        "id": "album_t_crimson-tide_1",
        "title": "Shadows of Michael",
        "durationStr": "03:37",
        "audioUrl": "/audio/audiocoffee-motivational-sport-rock-no-copyright-music-578087.mp3"
      },
      {
        "id": "album_t_crimson-tide_2",
        "title": "Light in Michael",
        "durationStr": "02:51",
        "audioUrl": "/audio/ncprime-non-copyright-music-cinematic-290418.mp3"
      },
      {
        "id": "album_t_crimson-tide_3",
        "title": "Visions from Michael",
        "durationStr": "02:39",
        "audioUrl": "/audio/moodmode-no-copyright-music-201745.mp3"
      },
      {
        "id": "album_t_crimson-tide_4",
        "title": "Journey to Michael",
        "durationStr": "03:53",
        "audioUrl": "/audio/ncprime-non-copyright-music-cinematic-290418.mp3"
      }
    ],
    "communityPosts": [
      {
        "id": "post_crimson-tide_1",
        "date": "2 days ago",
        "content": "Just wrapped up the final mix for the new record. Cannot wait to share this with you all. 🎛️✨",
        "likes": 450,
        "comments": 23
      },
      {
        "id": "post_crimson-tide_2",
        "date": "1 week ago",
        "content": "Thank you for the incredible energy last night. You guys were insane! 🔥",
        "likes": 1200,
        "comments": 89
      },
      {
        "id": "post_crimson-tide_3",
        "date": "2 weeks ago",
        "content": "Studio sessions have been incredibly productive. The new sound is evolving into something entirely unexpected.",
        "likes": 310,
        "comments": 14
      },
      {
        "id": "post_crimson-tide_4",
        "date": "1 month ago",
        "content": "Flashback to the first time we played this track live. The crowd reaction still gives me chills.",
        "likes": 890,
        "comments": 56
      }
    ]
  },
  {
    "slug": "zenith",
    "name": "Lucas Hoffman",
    "genre": "Ambient",
    "isVerified": false,
    "followers": 45000,
    "location": "Oslo, NO",
    "influences": [
      "Biosphere",
      "Stars of the Lid"
    ],
    "id": "a13",
    "bio": "A groundbreaking artist in the Ambient scene, Lucas Hoffman continues to push sonic boundaries. Known for unforgettable live performances and intricate studio productions, they have captivated audiences worldwide. Their journey began in Oslo, where early experiments with sound quickly gained traction in the underground scene. Today, Lucas Hoffman stands as a pillar of modern music, seamlessly blending raw emotion with cutting-edge production techniques to create soundscapes that resonate on a global scale.",
    "image": "https://randomuser.me/api/portraits/women/22.jpg",
    "banner": "https://picsum.photos/seed/zenith-banner/2000/800",
    "memberSince": "2020",
    "socials": {
      "instagram": "@zenith"
    },
    "albumTracks": [
      {
        "id": "album_t_zenith_0",
        "title": "Echoes of Lucas",
        "durationStr": "03:50",
        "audioUrl": "/audio/sub_clair-electronic-586100.mp3"
      },
      {
        "id": "album_t_zenith_1",
        "title": "Shadows of Lucas",
        "durationStr": "02:02",
        "audioUrl": "/audio/joyinsound-no-copyright-chill-music-403411.mp3"
      },
      {
        "id": "album_t_zenith_2",
        "title": "Light in Lucas",
        "durationStr": "03:49",
        "audioUrl": "/audio/alex-morgan-no-copyright-music-578487.mp3"
      },
      {
        "id": "album_t_zenith_3",
        "title": "Visions from Lucas",
        "durationStr": "02:51",
        "audioUrl": "/audio/sub_clair-electronic-586100.mp3"
      },
      {
        "id": "album_t_zenith_4",
        "title": "Journey to Lucas",
        "durationStr": "03:54",
        "audioUrl": "/audio/ncprime-non-copyright-music-cinematic-290418.mp3"
      }
    ],
    "communityPosts": [
      {
        "id": "post_zenith_1",
        "date": "2 days ago",
        "content": "Just wrapped up the final mix for the new record. Cannot wait to share this with you all. 🎛️✨",
        "likes": 450,
        "comments": 23
      },
      {
        "id": "post_zenith_2",
        "date": "1 week ago",
        "content": "Thank you for the incredible energy last night. You guys were insane! 🔥",
        "likes": 1200,
        "comments": 89
      },
      {
        "id": "post_zenith_3",
        "date": "2 weeks ago",
        "content": "Studio sessions have been incredibly productive. The new sound is evolving into something entirely unexpected.",
        "likes": 310,
        "comments": 14
      },
      {
        "id": "post_zenith_4",
        "date": "1 month ago",
        "content": "Flashback to the first time we played this track live. The crowd reaction still gives me chills.",
        "likes": 890,
        "comments": 56
      }
    ]
  },
  {
    "slug": "street-knowledge",
    "name": "Kevin Brooks",
    "genre": "Hip-Hop",
    "isVerified": true,
    "followers": 890000,
    "location": "New York, USA",
    "influences": [
      "Nas",
      "Wu-Tang Clan"
    ],
    "id": "a14",
    "bio": "A groundbreaking artist in the Hip-Hop scene, Kevin Brooks continues to push sonic boundaries. Known for unforgettable live performances and intricate studio productions, they have captivated audiences worldwide. Their journey began in New York, where early experiments with sound quickly gained traction in the underground scene. Today, Kevin Brooks stands as a pillar of modern music, seamlessly blending raw emotion with cutting-edge production techniques to create soundscapes that resonate on a global scale.",
    "image": "https://randomuser.me/api/portraits/men/23.jpg",
    "banner": "https://picsum.photos/seed/street-knowledge-banner/2000/800",
    "memberSince": "2020",
    "socials": {
      "instagram": "@street-knowledge"
    },
    "albumTracks": [
      {
        "id": "album_t_street-knowledge_0",
        "title": "Echoes of Kevin",
        "durationStr": "03:22",
        "audioUrl": "/audio/sigmamusicart-no-copyright-music-446509.mp3"
      },
      {
        "id": "album_t_street-knowledge_1",
        "title": "Shadows of Kevin",
        "durationStr": "03:02",
        "audioUrl": "/audio/ncprime-non-copyright-music-cinematic-290418.mp3"
      },
      {
        "id": "album_t_street-knowledge_2",
        "title": "Light in Kevin",
        "durationStr": "03:17",
        "audioUrl": "/audio/ncprime-non-copyright-music-cinematic-290418.mp3"
      },
      {
        "id": "album_t_street-knowledge_3",
        "title": "Visions from Kevin",
        "durationStr": "02:52",
        "audioUrl": "/audio/mfcc-no-copyright-music-261601.mp3"
      },
      {
        "id": "album_t_street-knowledge_4",
        "title": "Journey to Kevin",
        "durationStr": "03:40",
        "audioUrl": "/audio/moodmode-no-copyright-music-201745.mp3"
      }
    ],
    "communityPosts": [
      {
        "id": "post_street-knowledge_1",
        "date": "2 days ago",
        "content": "Just wrapped up the final mix for the new record. Cannot wait to share this with you all. 🎛️✨",
        "likes": 450,
        "comments": 23
      },
      {
        "id": "post_street-knowledge_2",
        "date": "1 week ago",
        "content": "Thank you for the incredible energy last night. You guys were insane! 🔥",
        "likes": 1200,
        "comments": 89
      },
      {
        "id": "post_street-knowledge_3",
        "date": "2 weeks ago",
        "content": "Studio sessions have been incredibly productive. The new sound is evolving into something entirely unexpected.",
        "likes": 310,
        "comments": 14
      },
      {
        "id": "post_street-knowledge_4",
        "date": "1 month ago",
        "content": "Flashback to the first time we played this track live. The crowd reaction still gives me chills.",
        "likes": 890,
        "comments": 56
      }
    ]
  },
  {
    "slug": "velvet-groove",
    "name": "Antoine Dupont",
    "genre": "Jazz",
    "isVerified": false,
    "followers": 34000,
    "location": "Paris, FR",
    "influences": [
      "Kamasi Washington",
      "Thundercat"
    ],
    "id": "a15",
    "bio": "A groundbreaking artist in the Jazz scene, Antoine Dupont continues to push sonic boundaries. Known for unforgettable live performances and intricate studio productions, they have captivated audiences worldwide. Their journey began in Paris, where early experiments with sound quickly gained traction in the underground scene. Today, Antoine Dupont stands as a pillar of modern music, seamlessly blending raw emotion with cutting-edge production techniques to create soundscapes that resonate on a global scale.",
    "image": "https://randomuser.me/api/portraits/women/24.jpg",
    "banner": "https://picsum.photos/seed/velvet-groove-banner/2000/800",
    "memberSince": "2020",
    "socials": {
      "instagram": "@velvet-groove"
    },
    "albumTracks": [
      {
        "id": "album_t_velvet-groove_0",
        "title": "Echoes of Antoine",
        "durationStr": "02:20",
        "audioUrl": "/audio/prettyjohn1-lofi-lofi-music-587176.mp3"
      },
      {
        "id": "album_t_velvet-groove_1",
        "title": "Shadows of Antoine",
        "durationStr": "02:40",
        "audioUrl": "/audio/sigmamusicart-no-copyright-music-446509.mp3"
      },
      {
        "id": "album_t_velvet-groove_2",
        "title": "Light in Antoine",
        "durationStr": "03:02",
        "audioUrl": "/audio/alex-morgan-no-copyright-music-528321.mp3"
      },
      {
        "id": "album_t_velvet-groove_3",
        "title": "Visions from Antoine",
        "durationStr": "02:41",
        "audioUrl": "/audio/alex-morgan-no-copyright-music-578487.mp3"
      },
      {
        "id": "album_t_velvet-groove_4",
        "title": "Journey to Antoine",
        "durationStr": "03:01",
        "audioUrl": "/audio/mfcc-no-copyright-music-261601.mp3"
      }
    ],
    "communityPosts": [
      {
        "id": "post_velvet-groove_1",
        "date": "2 days ago",
        "content": "Just wrapped up the final mix for the new record. Cannot wait to share this with you all. 🎛️✨",
        "likes": 450,
        "comments": 23
      },
      {
        "id": "post_velvet-groove_2",
        "date": "1 week ago",
        "content": "Thank you for the incredible energy last night. You guys were insane! 🔥",
        "likes": 1200,
        "comments": 89
      },
      {
        "id": "post_velvet-groove_3",
        "date": "2 weeks ago",
        "content": "Studio sessions have been incredibly productive. The new sound is evolving into something entirely unexpected.",
        "likes": 310,
        "comments": 14
      },
      {
        "id": "post_velvet-groove_4",
        "date": "1 month ago",
        "content": "Flashback to the first time we played this track live. The crowd reaction still gives me chills.",
        "likes": 890,
        "comments": 56
      }
    ]
  },
  {
    "slug": "bass-mechanic",
    "name": "Tyrone Smith",
    "genre": "Trap",
    "isVerified": true,
    "followers": 560000,
    "location": "Atlanta, USA",
    "influences": [
      "Lex Luger",
      "Southside"
    ],
    "id": "a16",
    "bio": "A groundbreaking artist in the Trap scene, Tyrone Smith continues to push sonic boundaries. Known for unforgettable live performances and intricate studio productions, they have captivated audiences worldwide. Their journey began in Atlanta, where early experiments with sound quickly gained traction in the underground scene. Today, Tyrone Smith stands as a pillar of modern music, seamlessly blending raw emotion with cutting-edge production techniques to create soundscapes that resonate on a global scale.",
    "image": "https://randomuser.me/api/portraits/men/25.jpg",
    "banner": "https://picsum.photos/seed/bass-mechanic-banner/2000/800",
    "memberSince": "2020",
    "socials": {
      "instagram": "@bass-mechanic"
    },
    "albumTracks": [
      {
        "id": "album_t_bass-mechanic_0",
        "title": "Echoes of Tyrone",
        "durationStr": "03:47",
        "audioUrl": "/audio/sigmamusicart-no-copyright-music-446509.mp3"
      },
      {
        "id": "album_t_bass-mechanic_1",
        "title": "Shadows of Tyrone",
        "durationStr": "03:28",
        "audioUrl": "/audio/alex-morgan-no-copyright-music-528321.mp3"
      },
      {
        "id": "album_t_bass-mechanic_2",
        "title": "Light in Tyrone",
        "durationStr": "02:56",
        "audioUrl": "/audio/sigmamusicart-no-copyright-music-537751.mp3"
      },
      {
        "id": "album_t_bass-mechanic_3",
        "title": "Visions from Tyrone",
        "durationStr": "03:00",
        "audioUrl": "/audio/ncprime-non-copyright-music-cinematic-290418.mp3"
      },
      {
        "id": "album_t_bass-mechanic_4",
        "title": "Journey to Tyrone",
        "durationStr": "02:24",
        "audioUrl": "/audio/sub_clair-electronic-586100.mp3"
      }
    ],
    "communityPosts": [
      {
        "id": "post_bass-mechanic_1",
        "date": "2 days ago",
        "content": "Just wrapped up the final mix for the new record. Cannot wait to share this with you all. 🎛️✨",
        "likes": 450,
        "comments": 23
      },
      {
        "id": "post_bass-mechanic_2",
        "date": "1 week ago",
        "content": "Thank you for the incredible energy last night. You guys were insane! 🔥",
        "likes": 1200,
        "comments": 89
      },
      {
        "id": "post_bass-mechanic_3",
        "date": "2 weeks ago",
        "content": "Studio sessions have been incredibly productive. The new sound is evolving into something entirely unexpected.",
        "likes": 310,
        "comments": 14
      },
      {
        "id": "post_bass-mechanic_4",
        "date": "1 month ago",
        "content": "Flashback to the first time we played this track live. The crowd reaction still gives me chills.",
        "likes": 890,
        "comments": 56
      }
    ]
  },
  {
    "slug": "cinema-sounds",
    "name": "Hans Peterson",
    "genre": "Cinematic",
    "isVerified": false,
    "followers": 120000,
    "location": "Los Angeles, USA",
    "influences": [
      "Hans Zimmer",
      "Junkie XL"
    ],
    "id": "a17",
    "bio": "A groundbreaking artist in the Cinematic scene, Hans Peterson continues to push sonic boundaries. Known for unforgettable live performances and intricate studio productions, they have captivated audiences worldwide. Their journey began in Los Angeles, where early experiments with sound quickly gained traction in the underground scene. Today, Hans Peterson stands as a pillar of modern music, seamlessly blending raw emotion with cutting-edge production techniques to create soundscapes that resonate on a global scale.",
    "image": "https://randomuser.me/api/portraits/women/26.jpg",
    "banner": "https://picsum.photos/seed/cinema-sounds-banner/2000/800",
    "memberSince": "2020",
    "socials": {
      "instagram": "@cinema-sounds"
    },
    "albumTracks": [
      {
        "id": "album_t_cinema-sounds_0",
        "title": "Echoes of Hans",
        "durationStr": "02:40",
        "audioUrl": "/audio/ncprime-non-copyright-music-cinematic-290418.mp3"
      },
      {
        "id": "album_t_cinema-sounds_1",
        "title": "Shadows of Hans",
        "durationStr": "02:34",
        "audioUrl": "/audio/ncprime-non-copyright-music-cinematic-290418.mp3"
      },
      {
        "id": "album_t_cinema-sounds_2",
        "title": "Light in Hans",
        "durationStr": "02:43",
        "audioUrl": "/audio/mfcc-no-copyright-music-261601.mp3"
      },
      {
        "id": "album_t_cinema-sounds_3",
        "title": "Visions from Hans",
        "durationStr": "02:48",
        "audioUrl": "/audio/moodmode-no-copyright-music-201745.mp3"
      },
      {
        "id": "album_t_cinema-sounds_4",
        "title": "Journey to Hans",
        "durationStr": "03:22",
        "audioUrl": "/audio/alex-morgan-no-copyright-music-528321.mp3"
      }
    ],
    "communityPosts": [
      {
        "id": "post_cinema-sounds_1",
        "date": "2 days ago",
        "content": "Just wrapped up the final mix for the new record. Cannot wait to share this with you all. 🎛️✨",
        "likes": 450,
        "comments": 23
      },
      {
        "id": "post_cinema-sounds_2",
        "date": "1 week ago",
        "content": "Thank you for the incredible energy last night. You guys were insane! 🔥",
        "likes": 1200,
        "comments": 89
      },
      {
        "id": "post_cinema-sounds_3",
        "date": "2 weeks ago",
        "content": "Studio sessions have been incredibly productive. The new sound is evolving into something entirely unexpected.",
        "likes": 310,
        "comments": 14
      },
      {
        "id": "post_cinema-sounds_4",
        "date": "1 month ago",
        "content": "Flashback to the first time we played this track live. The crowd reaction still gives me chills.",
        "likes": 890,
        "comments": 56
      }
    ]
  },
  {
    "slug": "void-walker",
    "name": "Julian Vance",
    "genre": "Experimental",
    "isVerified": true,
    "followers": 24000,
    "location": "Berlin, DE",
    "influences": [
      "Aphex Twin",
      "Autechre"
    ],
    "id": "a18",
    "bio": "A groundbreaking artist in the Experimental scene, Julian Vance continues to push sonic boundaries. Known for unforgettable live performances and intricate studio productions, they have captivated audiences worldwide. Their journey began in Berlin, where early experiments with sound quickly gained traction in the underground scene. Today, Julian Vance stands as a pillar of modern music, seamlessly blending raw emotion with cutting-edge production techniques to create soundscapes that resonate on a global scale.",
    "image": "https://randomuser.me/api/portraits/men/27.jpg",
    "banner": "https://picsum.photos/seed/void-walker-banner/2000/800",
    "memberSince": "2020",
    "socials": {
      "instagram": "@void-walker"
    },
    "albumTracks": [
      {
        "id": "album_t_void-walker_0",
        "title": "Echoes of Julian",
        "durationStr": "03:44",
        "audioUrl": "/audio/alex-morgan-no-copyright-music-528321.mp3"
      },
      {
        "id": "album_t_void-walker_1",
        "title": "Shadows of Julian",
        "durationStr": "02:44",
        "audioUrl": "/audio/alex-morgan-no-copyright-music-578487.mp3"
      },
      {
        "id": "album_t_void-walker_2",
        "title": "Light in Julian",
        "durationStr": "02:51",
        "audioUrl": "/audio/ncprime-non-copyright-music-cinematic-290418.mp3"
      },
      {
        "id": "album_t_void-walker_3",
        "title": "Visions from Julian",
        "durationStr": "03:14",
        "audioUrl": "/audio/sub_clair-electronic-586100.mp3"
      },
      {
        "id": "album_t_void-walker_4",
        "title": "Journey to Julian",
        "durationStr": "02:44",
        "audioUrl": "/audio/sigmamusicart-no-copyright-music-446509.mp3"
      }
    ],
    "communityPosts": [
      {
        "id": "post_void-walker_1",
        "date": "2 days ago",
        "content": "Just wrapped up the final mix for the new record. Cannot wait to share this with you all. 🎛️✨",
        "likes": 450,
        "comments": 23
      },
      {
        "id": "post_void-walker_2",
        "date": "1 week ago",
        "content": "Thank you for the incredible energy last night. You guys were insane! 🔥",
        "likes": 1200,
        "comments": 89
      },
      {
        "id": "post_void-walker_3",
        "date": "2 weeks ago",
        "content": "Studio sessions have been incredibly productive. The new sound is evolving into something entirely unexpected.",
        "likes": 310,
        "comments": 14
      },
      {
        "id": "post_void-walker_4",
        "date": "1 month ago",
        "content": "Flashback to the first time we played this track live. The crowd reaction still gives me chills.",
        "likes": 890,
        "comments": 56
      }
    ]
  }
];

export const ARTIST_TRACKS: Track[] = [
  {
    "id": "t1",
    "title": "Neon Rain",
    "artist": "Elena Rostova",
    "category": "ELECTRONIC",
    "image": "https://picsum.photos/seed/t1-track/400/400",
    "durationStr": "03:49",
        "audioUrl": "/audio/alex-morgan-no-copyright-music-528321.mp3",
    "durationSec": 227
  },
  {
    "id": "t2",
    "title": "Lost Rain",
    "artist": "Elena Rostova",
    "category": "ELECTRONIC",
    "image": "https://picsum.photos/seed/t2-track/400/400",
    "durationStr": "03:14",
        "audioUrl": "/audio/alex-morgan-no-copyright-music-528321.mp3",
    "durationSec": 229
  },
  {
    "id": "t3",
    "title": "Midnight Rain",
    "artist": "Elena Rostova",
    "category": "ELECTRONIC",
    "image": "https://picsum.photos/seed/t3-track/400/400",
    "durationStr": "02:20",
        "audioUrl": "/audio/prettyjohn1-lofi-lofi-music-587176.mp3",
    "durationSec": 231
  },
  {
    "id": "t4",
    "title": "Neon Gravity",
    "artist": "Marcus Johnson",
    "category": "HIP-HOP",
    "image": "https://picsum.photos/seed/t4-track/400/400",
    "durationStr": "03:30",
        "audioUrl": "/audio/ncprime-non-copyright-music-cinematic-290418.mp3",
    "durationSec": 237
  },
  {
    "id": "t5",
    "title": "Lost Gravity",
    "artist": "Marcus Johnson",
    "category": "HIP-HOP",
    "image": "https://picsum.photos/seed/t5-track/400/400",
    "durationStr": "03:26",
        "audioUrl": "/audio/alex-morgan-no-copyright-music-578487.mp3",
    "durationSec": 191
  },
  {
    "id": "t6",
    "title": "Midnight Gravity",
    "artist": "Marcus Johnson",
    "category": "HIP-HOP",
    "image": "https://picsum.photos/seed/t6-track/400/400",
    "durationStr": "02:57",
        "audioUrl": "/audio/alex-morgan-no-copyright-music-528321.mp3",
    "durationSec": 201
  },
  {
    "id": "t7",
    "title": "Neon Signals",
    "artist": "David Chen",
    "category": "INDIE",
    "image": "https://picsum.photos/seed/t7-track/400/400",
    "durationStr": "03:10",
        "audioUrl": "/audio/joyinsound-no-copyright-chill-music-403411.mp3",
    "durationSec": 211
  },
  {
    "id": "t8",
    "title": "Lost Signals",
    "artist": "David Chen",
    "category": "INDIE",
    "image": "https://picsum.photos/seed/t8-track/400/400",
    "durationStr": "02:53",
        "audioUrl": "/audio/moodmode-no-copyright-music-201745.mp3",
    "durationSec": 159
  },
  {
    "id": "t9",
    "title": "Midnight Signals",
    "artist": "David Chen",
    "category": "INDIE",
    "image": "https://picsum.photos/seed/t9-track/400/400",
    "durationStr": "03:43",
        "audioUrl": "/audio/audiocoffee-motivational-sport-rock-no-copyright-music-578087.mp3",
    "durationSec": 187
  },
  {
    "id": "t10",
    "title": "Neon Horizon",
    "artist": "Sophia Williams",
    "category": "AMBIENT",
    "image": "https://picsum.photos/seed/t10-track/400/400",
    "durationStr": "03:51",
        "audioUrl": "/audio/ncprime-non-copyright-music-cinematic-290418.mp3",
    "durationSec": 220
  },
  {
    "id": "t11",
    "title": "Lost Horizon",
    "artist": "Sophia Williams",
    "category": "AMBIENT",
    "image": "https://picsum.photos/seed/t11-track/400/400",
    "durationStr": "03:35",
        "audioUrl": "/audio/ncprime-non-copyright-music-cinematic-290418.mp3",
    "durationSec": 195
  },
  {
    "id": "t12",
    "title": "Midnight Horizon",
    "artist": "Sophia Williams",
    "category": "AMBIENT",
    "image": "https://picsum.photos/seed/t12-track/400/400",
    "durationStr": "03:49",
        "audioUrl": "/audio/mfcc-no-copyright-music-261601.mp3",
    "durationSec": 150
  },
  {
    "id": "t13",
    "title": "Neon Echoes",
    "artist": "Arin Patel",
    "category": "POP",
    "image": "https://picsum.photos/seed/t13-track/400/400",
    "durationStr": "02:57",
        "audioUrl": "/audio/audiocoffee-motivational-sport-rock-no-copyright-music-578087.mp3",
    "durationSec": 172
  },
  {
    "id": "t14",
    "title": "Lost Echoes",
    "artist": "Arin Patel",
    "category": "POP",
    "image": "https://picsum.photos/seed/t14-track/400/400",
    "durationStr": "03:41",
        "audioUrl": "/audio/ncprime-non-copyright-music-cinematic-290418.mp3",
    "durationSec": 226
  },
  {
    "id": "t15",
    "title": "Midnight Echoes",
    "artist": "Arin Patel",
    "category": "POP",
    "image": "https://picsum.photos/seed/t15-track/400/400",
    "durationStr": "02:02",
        "audioUrl": "/audio/mfcc-no-copyright-music-261601.mp3",
    "durationSec": 227
  },
  {
    "id": "t16",
    "title": "Neon Waves",
    "artist": "Jamal Davis",
    "category": "R&B",
    "image": "https://picsum.photos/seed/t16-track/400/400",
    "durationStr": "03:36",
        "audioUrl": "/audio/mfcc-no-copyright-music-261601.mp3",
    "durationSec": 227
  },
  {
    "id": "t17",
    "title": "Lost Waves",
    "artist": "Jamal Davis",
    "category": "R&B",
    "image": "https://picsum.photos/seed/t17-track/400/400",
    "durationStr": "02:06",
        "audioUrl": "/audio/alex-morgan-no-copyright-music-578487.mp3",
    "durationSec": 243
  },
  {
    "id": "t18",
    "title": "Midnight Waves",
    "artist": "Jamal Davis",
    "category": "R&B",
    "image": "https://picsum.photos/seed/t18-track/400/400",
    "durationStr": "03:25",
        "audioUrl": "/audio/sigmamusicart-no-copyright-music-537751.mp3",
    "durationSec": 213
  },
  {
    "id": "t19",
    "title": "Neon Rain",
    "artist": "Ryan Miller",
    "category": "SYNTHWAVE",
    "image": "https://picsum.photos/seed/t19-track/400/400",
    "durationStr": "02:42",
        "audioUrl": "/audio/audiocoffee-motivational-sport-rock-no-copyright-music-578087.mp3",
    "durationSec": 209
  },
  {
    "id": "t20",
    "title": "Lost Rain",
    "artist": "Ryan Miller",
    "category": "SYNTHWAVE",
    "image": "https://picsum.photos/seed/t20-track/400/400",
    "durationStr": "03:23",
        "audioUrl": "/audio/sigmamusicart-no-copyright-music-537751.mp3",
    "durationSec": 189
  },
  {
    "id": "t21",
    "title": "Midnight Rain",
    "artist": "Ryan Miller",
    "category": "SYNTHWAVE",
    "image": "https://picsum.photos/seed/t21-track/400/400",
    "durationStr": "03:13",
        "audioUrl": "/audio/alex-morgan-no-copyright-music-528321.mp3",
    "durationSec": 173
  },
  {
    "id": "t22",
    "title": "Neon Gravity",
    "artist": "Lyra Anderson",
    "category": "POP",
    "image": "https://picsum.photos/seed/t22-track/400/400",
    "durationStr": "02:21",
        "audioUrl": "/audio/moodmode-no-copyright-music-201745.mp3",
    "durationSec": 230
  },
  {
    "id": "t23",
    "title": "Lost Gravity",
    "artist": "Lyra Anderson",
    "category": "POP",
    "image": "https://picsum.photos/seed/t23-track/400/400",
    "durationStr": "03:25",
        "audioUrl": "/audio/alex-morgan-no-copyright-music-578487.mp3",
    "durationSec": 159
  },
  {
    "id": "t24",
    "title": "Midnight Gravity",
    "artist": "Lyra Anderson",
    "category": "POP",
    "image": "https://picsum.photos/seed/t24-track/400/400",
    "durationStr": "02:56",
        "audioUrl": "/audio/prettyjohn1-lofi-lofi-music-587176.mp3",
    "durationSec": 221
  },
  {
    "id": "t25",
    "title": "Neon Signals",
    "artist": "Thomas Wright",
    "category": "ELECTRONIC",
    "image": "https://picsum.photos/seed/t25-track/400/400",
    "durationStr": "02:38",
        "audioUrl": "/audio/sigmamusicart-no-copyright-music-446509.mp3",
    "durationSec": 217
  },
  {
    "id": "t26",
    "title": "Lost Signals",
    "artist": "Thomas Wright",
    "category": "ELECTRONIC",
    "image": "https://picsum.photos/seed/t26-track/400/400",
    "durationStr": "02:21",
        "audioUrl": "/audio/sigmamusicart-no-copyright-music-537751.mp3",
    "durationSec": 172
  },
  {
    "id": "t27",
    "title": "Midnight Signals",
    "artist": "Thomas Wright",
    "category": "ELECTRONIC",
    "image": "https://picsum.photos/seed/t27-track/400/400",
    "durationStr": "02:16",
        "audioUrl": "/audio/sub_clair-electronic-586100.mp3",
    "durationSec": 230
  },
  {
    "id": "t28",
    "title": "Neon Horizon",
    "artist": "The Harrison Bros",
    "category": "INDIE",
    "image": "https://picsum.photos/seed/t28-track/400/400",
    "durationStr": "03:46",
        "audioUrl": "/audio/audiocoffee-motivational-sport-rock-no-copyright-music-578087.mp3",
    "durationSec": 227
  },
  {
    "id": "t29",
    "title": "Lost Horizon",
    "artist": "The Harrison Bros",
    "category": "INDIE",
    "image": "https://picsum.photos/seed/t29-track/400/400",
    "durationStr": "03:25",
        "audioUrl": "/audio/ncprime-non-copyright-music-cinematic-290418.mp3",
    "durationSec": 228
  },
  {
    "id": "t30",
    "title": "Midnight Horizon",
    "artist": "The Harrison Bros",
    "category": "INDIE",
    "image": "https://picsum.photos/seed/t30-track/400/400",
    "durationStr": "02:41",
        "audioUrl": "/audio/sigmamusicart-no-copyright-music-537751.mp3",
    "durationSec": 237
  },
  {
    "id": "t31",
    "title": "Neon Echoes",
    "artist": "Aisha Khan",
    "category": "R&B",
    "image": "https://picsum.photos/seed/t31-track/400/400",
    "durationStr": "02:20",
        "audioUrl": "/audio/alex-morgan-no-copyright-music-528321.mp3",
    "durationSec": 224
  },
  {
    "id": "t32",
    "title": "Lost Echoes",
    "artist": "Aisha Khan",
    "category": "R&B",
    "image": "https://picsum.photos/seed/t32-track/400/400",
    "durationStr": "03:11",
        "audioUrl": "/audio/joyinsound-no-copyright-chill-music-403411.mp3",
    "durationSec": 226
  },
  {
    "id": "t33",
    "title": "Midnight Echoes",
    "artist": "Aisha Khan",
    "category": "R&B",
    "image": "https://picsum.photos/seed/t33-track/400/400",
    "durationStr": "02:23",
        "audioUrl": "/audio/audiocoffee-motivational-sport-rock-no-copyright-music-578087.mp3",
    "durationSec": 192
  },
  {
    "id": "t34",
    "title": "Neon Waves",
    "artist": "Michael Stone",
    "category": "ROCK",
    "image": "https://picsum.photos/seed/t34-track/400/400",
    "durationStr": "02:47",
        "audioUrl": "/audio/alex-morgan-no-copyright-music-578487.mp3",
    "durationSec": 226
  },
  {
    "id": "t35",
    "title": "Lost Waves",
    "artist": "Michael Stone",
    "category": "ROCK",
    "image": "https://picsum.photos/seed/t35-track/400/400",
    "durationStr": "02:08",
        "audioUrl": "/audio/sigmamusicart-no-copyright-music-537751.mp3",
    "durationSec": 173
  },
  {
    "id": "t36",
    "title": "Midnight Waves",
    "artist": "Michael Stone",
    "category": "ROCK",
    "image": "https://picsum.photos/seed/t36-track/400/400",
    "durationStr": "03:33",
        "audioUrl": "/audio/joyinsound-no-copyright-chill-music-403411.mp3",
    "durationSec": 221
  },
  {
    "id": "t37",
    "title": "Neon Rain",
    "artist": "Lucas Hoffman",
    "category": "AMBIENT",
    "image": "https://picsum.photos/seed/t37-track/400/400",
    "durationStr": "02:44",
        "audioUrl": "/audio/sub_clair-electronic-586100.mp3",
    "durationSec": 200
  },
  {
    "id": "t38",
    "title": "Lost Rain",
    "artist": "Lucas Hoffman",
    "category": "AMBIENT",
    "image": "https://picsum.photos/seed/t38-track/400/400",
    "durationStr": "03:42",
        "audioUrl": "/audio/alex-morgan-no-copyright-music-578487.mp3",
    "durationSec": 156
  },
  {
    "id": "t39",
    "title": "Midnight Rain",
    "artist": "Lucas Hoffman",
    "category": "AMBIENT",
    "image": "https://picsum.photos/seed/t39-track/400/400",
    "durationStr": "03:05",
        "audioUrl": "/audio/mfcc-no-copyright-music-261601.mp3",
    "durationSec": 167
  },
  {
    "id": "t40",
    "title": "Neon Gravity",
    "artist": "Kevin Brooks",
    "category": "HIP-HOP",
    "image": "https://picsum.photos/seed/t40-track/400/400",
    "durationStr": "02:00",
        "audioUrl": "/audio/sigmamusicart-no-copyright-music-446509.mp3",
    "durationSec": 192
  },
  {
    "id": "t41",
    "title": "Lost Gravity",
    "artist": "Kevin Brooks",
    "category": "HIP-HOP",
    "image": "https://picsum.photos/seed/t41-track/400/400",
    "durationStr": "03:15",
        "audioUrl": "/audio/alex-morgan-no-copyright-music-528321.mp3",
    "durationSec": 212
  },
  {
    "id": "t42",
    "title": "Midnight Gravity",
    "artist": "Kevin Brooks",
    "category": "HIP-HOP",
    "image": "https://picsum.photos/seed/t42-track/400/400",
    "durationStr": "03:19",
        "audioUrl": "/audio/alex-morgan-no-copyright-music-578487.mp3",
    "durationSec": 152
  },
  {
    "id": "t43",
    "title": "Neon Signals",
    "artist": "Antoine Dupont",
    "category": "JAZZ",
    "image": "https://picsum.photos/seed/t43-track/400/400",
    "durationStr": "02:43",
        "audioUrl": "/audio/prettyjohn1-lofi-lofi-music-587176.mp3",
    "durationSec": 193
  },
  {
    "id": "t44",
    "title": "Lost Signals",
    "artist": "Antoine Dupont",
    "category": "JAZZ",
    "image": "https://picsum.photos/seed/t44-track/400/400",
    "durationStr": "03:14",
        "audioUrl": "/audio/mfcc-no-copyright-music-261601.mp3",
    "durationSec": 171
  },
  {
    "id": "t45",
    "title": "Midnight Signals",
    "artist": "Antoine Dupont",
    "category": "JAZZ",
    "image": "https://picsum.photos/seed/t45-track/400/400",
    "durationStr": "03:15",
        "audioUrl": "/audio/joyinsound-no-copyright-chill-music-403411.mp3",
    "durationSec": 193
  },
  {
    "id": "t46",
    "title": "Neon Horizon",
    "artist": "Tyrone Smith",
    "category": "TRAP",
    "image": "https://picsum.photos/seed/t46-track/400/400",
    "durationStr": "02:32",
        "audioUrl": "/audio/prettyjohn1-lofi-lofi-music-587176.mp3",
    "durationSec": 174
  },
  {
    "id": "t47",
    "title": "Lost Horizon",
    "artist": "Tyrone Smith",
    "category": "TRAP",
    "image": "https://picsum.photos/seed/t47-track/400/400",
    "durationStr": "03:38",
        "audioUrl": "/audio/sub_clair-electronic-586100.mp3",
    "durationSec": 155
  },
  {
    "id": "t48",
    "title": "Midnight Horizon",
    "artist": "Tyrone Smith",
    "category": "TRAP",
    "image": "https://picsum.photos/seed/t48-track/400/400",
    "durationStr": "03:05",
        "audioUrl": "/audio/alex-morgan-no-copyright-music-578487.mp3",
    "durationSec": 197
  },
  {
    "id": "t49",
    "title": "Neon Echoes",
    "artist": "Hans Peterson",
    "category": "CINEMATIC",
    "image": "https://picsum.photos/seed/t49-track/400/400",
    "durationStr": "03:44",
        "audioUrl": "/audio/alex-morgan-no-copyright-music-578487.mp3",
    "durationSec": 189
  },
  {
    "id": "t50",
    "title": "Lost Echoes",
    "artist": "Hans Peterson",
    "category": "CINEMATIC",
    "image": "https://picsum.photos/seed/t50-track/400/400",
    "durationStr": "03:30",
        "audioUrl": "/audio/audiocoffee-motivational-sport-rock-no-copyright-music-578087.mp3",
    "durationSec": 204
  },
  {
    "id": "t51",
    "title": "Midnight Echoes",
    "artist": "Hans Peterson",
    "category": "CINEMATIC",
    "image": "https://picsum.photos/seed/t51-track/400/400",
    "durationStr": "03:39",
        "audioUrl": "/audio/ncprime-non-copyright-music-cinematic-290418.mp3",
    "durationSec": 211
  },
  {
    "id": "t52",
    "title": "Neon Waves",
    "artist": "Julian Vance",
    "category": "EXPERIMENTAL",
    "image": "https://picsum.photos/seed/t52-track/400/400",
    "durationStr": "02:09",
        "audioUrl": "/audio/alex-morgan-no-copyright-music-528321.mp3",
    "durationSec": 199
  },
  {
    "id": "t53",
    "title": "Lost Waves",
    "artist": "Julian Vance",
    "category": "EXPERIMENTAL",
    "image": "https://picsum.photos/seed/t53-track/400/400",
    "durationStr": "03:41",
        "audioUrl": "/audio/alex-morgan-no-copyright-music-578487.mp3",
    "durationSec": 213
  },
  {
    "id": "t54",
    "title": "Midnight Waves",
    "artist": "Julian Vance",
    "category": "EXPERIMENTAL",
    "image": "https://picsum.photos/seed/t54-track/400/400",
    "durationStr": "03:20",
        "audioUrl": "/audio/alex-morgan-no-copyright-music-528321.mp3",
    "durationSec": 226
  }
];
