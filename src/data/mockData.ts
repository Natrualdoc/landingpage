export interface MediaItem {
  id: string;
  title: string;
  originalTitle: string;
  type: 'movie' | 'series';
  rating: number;
  year: number;
  genres: string[];
  duration: string;
  poster: string;
  backdrop: string;
  description: string;
  director: string;
  cast: string[];
  videoUrl: string;
  popular: boolean;
}

export const mockMediaData: MediaItem[] = [
  {
    id: "1",
    title: "میان‌ستاره‌ای",
    originalTitle: "Interstellar",
    type: "movie",
    rating: 8.7,
    year: 2014,
    genres: ["علمی تخیلی", "ماجراجویی", "درام"],
    duration: "۲ ساعت و ۴۹ دقیقه",
    poster: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=500&auto=format&fit=crop&q=80",
    backdrop: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&auto=format&fit=crop&q=80",
    description: "در حالی که بقای بشر روی کره زمین در معرض خطر قرار گرفته است، گروهی از کاوشگران با استفاده از یک کرم‌چاله تازه کشف شده به سفری فراتر از کهکشان می‌روند تا مسکنی جدید برای بشریت پیدا کنند...",
    director: "کریستوفر نولان",
    cast: ["متیو مک‌کانهی", "ان هتوی", "جسیکا چستین", "مایکل کین"],
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    popular: true
  },
  {
    id: "2",
    title: "تلقین",
    originalTitle: "Inception",
    type: "movie",
    rating: 8.8,
    year: 2010,
    genres: ["اکشن", "علمی تخیلی", "هیجان انگیز"],
    duration: "۲ ساعت و ۲۸ دقیقه",
    poster: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=500&auto=format&fit=crop&q=80",
    backdrop: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=1200&auto=format&fit=crop&q=80",
    description: "دام کاب یک دزد حرفه‌ای است که با نفوذ به درون ناخودآگاه افراد در زمان خواب، ارزشمندترین رازهای آن‌ها را سرقت می‌کند. اکنون به او مأموریتی برعکس پیشنهاد می‌شود: کاشتن یک ایده در ذهن یک مدیر ارشد...",
    director: "کریستوفر نولان",
    cast: ["لئوناردو دی‌کاپریو", "جوزف گوردون لویت", "الیوت پیج", "تام هاردی"],
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    popular: true
  },
  {
    id: "3",
    title: "بازی تاج و تخت",
    originalTitle: "Game of Thrones",
    type: "series",
    rating: 9.2,
    year: 2011,
    genres: ["فانتزی", "درام", "ماجراجویی"],
    duration: "۸ فصل (۷۳ قسمت)",
    poster: "https://images.unsplash.com/photo-1560942485-b2a11cc13456?w=500&auto=format&fit=crop&q=80",
    backdrop: "https://images.unsplash.com/photo-1519074069444-1ba4e6663104?w=1200&auto=format&fit=crop&q=80",
    description: "چندین خاندان اشرافی در سرزمینی خیالی به نام وستروس برای به دست آوردن تخت آهنین پادشاهی و فرمانروایی بر هفت اقلیم وارد جنگی خونین و توطئه‌های پیچیده سیاسی می‌شوند، در حالی که تهدیدی باستانی از شمال بیدار می‌شود...",
    director: "دیوید بنیاف، دی. بی. وایس",
    cast: ["امیلیا کلارک", "کیت هرینگتون", "پیتر دینکلیج", "لنا هیدی"],
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    popular: true
  },
  {
    id: "4",
    title: "چرنوبیل",
    originalTitle: "Chernobyl",
    type: "series",
    rating: 9.4,
    year: 2019,
    genres: ["درام", "تاریخی", "هیجان انگیز"],
    duration: "۱ فصل (۵ قسمت)",
    poster: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=500&auto=format&fit=crop&q=80",
    backdrop: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&auto=format&fit=crop&q=80",
    description: "داستانی واقعی و تکان‌دهنده از فاجعه هسته‌ای سال ۱۹۸۶ در نیروگاه چرنوبیل اوکراین شوروی، و فداکاری‌های بی‌شمار مردان و زنانی که برای نجات اروپا از یک فاجعه غیرقابل تصور جان خود را از دست دادند...",
    director: "کریگ مازن",
    cast: ["جرد هریس", "استلان اسکاشگورد", "امیلی واتسون"],
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    popular: false
  },
  {
    id: "5",
    title: "شوالیه تاریکی",
    originalTitle: "The Dark Knight",
    type: "movie",
    rating: 9.0,
    year: 2008,
    genres: ["اکشن", "جنایی", "درام"],
    duration: "۲ ساعت و ۳۲ دقیقه",
    poster: "https://images.unsplash.com/photo-1601513525393-0393828988a7?w=500&auto=format&fit=crop&q=80",
    backdrop: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=1200&auto=format&fit=crop&q=80",
    description: "بتمن با کمک دادستان جدید گاتهام، هاروی دنت و کمیسر پلیس جیمز گوردون موفق می‌شود تبهکاری را مهار کند، تا اینکه آشوب‌طلبی نابغه و روانی به نام جوکر وارد شهر می‌شود و همه چیز را به ورطه آشوب می‌کشاند...",
    director: "کریستوفر نولان",
    cast: ["کریستین بیل", "هیث لجر", "گری اولدمن", "مگی جیلنهال"],
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    popular: true
  },
  {
    id: "6",
    title: "شکستن بد",
    originalTitle: "Breaking Bad",
    type: "series",
    rating: 9.5,
    year: 2008,
    genres: ["جنایی", "درام", "هیجان انگیز"],
    duration: "۵ فصل (۶۲ قسمت)",
    poster: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=500&auto=format&fit=crop&q=80",
    backdrop: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=1200&auto=format&fit=crop&q=80",
    description: "یک معلم شیمی دبیرستان که متوجه می‌شود به سرطان ریه پیشرفته مبتلا شده است، برای تأمین مالی آینده خانواده‌اش، با یکی از دانش‌آموزان سابق خود وارد بازار تولید و فروش مت‌امفتامین می‌شود...",
    director: "وینس گیلیگان",
    cast: ["برایان کرانستون", "آرون پال", "آنا گان", "باب ادنکیرک"],
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    popular: true
  }
];
