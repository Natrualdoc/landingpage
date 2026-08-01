import {
  Monitor,
  Navigation,
  Smartphone,
  LogIn,
  LayoutDashboard,
  Film,
  CreditCard,
  Wallet,
  Settings,
  Crown,
  Ticket,
  Music,
  Globe,
  FolderTree,
  Users,
  Bell,
  UserCog,
  FileText,
  BarChart3,
  Tv,
} from "lucide-react";
import type { ComponentType } from "react";

/**
 * ─── Feature Showcase Data ───
 * Each item represents one feature/section of the Mediafy product.
 * GIFs are stored in /public/gifs/ and referenced by URL.
 *
 * To update content later, simply edit the title, description, or mediaUrl
 * fields below — no need to touch the component logic.
 */

export interface ShowcaseFeature {
  id: string;
  title: string;
  description: string;
  mediaUrl: string;
  mediaType?: "gif" | "video";
  icon: ComponentType<{ className?: string }>;
}

export const showcaseFeatures: ShowcaseFeature[] = [
  // ─── 1. صفحه اصلی ───
  {
    id: "homepage",
    title: "صفحه اصلی سایت",
    description:
      "نمایش کامل پرتال عمومی سایت شامل هیرو اسلایدر سینمایی، ردیف‌های فیلم و سریال با دسته‌بندی موضوعی، کارت‌های ویژه محتوا و طراحی تاریک حرفه‌ای VOD با پشتیبانی کامل RTL فارسی.",
    mediaUrl: "/gifs/homepage.mp4",
    icon: Monitor,
  },
  // ─── 2. نوار ناوبری ───
  {
    id: "navbar",
    title: "نوار ناوبری و منوی اصلی",
    description:
      "منوی ناوبری واکنش‌گرا با ساختار سینمایی شامل لینک‌های جستجوی زنده، دسته‌بندی ژانر، فیلتر سال ساخت و دسترسی سریع به پنل کاربری و سبد خرید اشتراک.",
    mediaUrl: "/gifs/navbar.mp4",
    icon: Navigation,
  },
  // ─── 4. ورود و داشبورد کاربر ───
  {
    id: "login-userdashboard",
    title: "ورود کاربر و داشبورد",
    description:
      "سیستم ورود پیامکی (OTP) و ایمیلی امن با داشبورد اختصاصی کاربر شامل وضعیت اشتراک فعال، تاریخچه تراکنش‌ها، لیست تماشا و تنظیمات حساب کاربری.",
    mediaUrl: "/gifs/login-userdashboard.mp4",
    icon: LogIn,
  },
  // ─── 5. پخش‌کننده ویدیو هوشمند ───
  {
    id: "custom-player",
    title: "پخش‌کننده ویدیو و کنترل ژست حرکتی",
    description:
      "پلیر اختصاصی و بومی توسعه‌یافته با پشتیبانی از استریم HLS و MP4، سیستم رزومه پخش خودکار، تغییر نرم کیفیت و سرعت، و کنترل صدای عمودی و روشنایی صفحه با ژست‌های لمسی و موس.",
    mediaUrl: "/gifs/test-player.mp4",
    icon: Tv,
  },
  // ─── 6. نمای پنل ادمین ───
  {
    id: "admin-panel",
    title: "نمای کلی پنل ادمین",
    description:
      "داشبورد جامع مدیریت سیستم با نمودارهای آماری درآمد روزانه، تعداد کاربران فعال، گزارش تراکنش‌های مالی و دسترسی سریع به تمامی ماژول‌های مدیریتی.",
    mediaUrl: "/gifs/admin-panel.mp4",
    icon: LayoutDashboard,
  },
  // ─── 7. آمارگیر هوشمند ───
  {
    id: "analytics",
    title: "آمار و تحلیل پیشرفته بازدیدکنندگان",
    description:
      "سیستم پیشرفته آمارگیری زنده برای بررسی تعداد کاربران فعال، کشورهای بازدیدکننده، صفحات پربازدید، ارجاع‌دهنده‌ها و دستگاه‌های مورد استفاده به همراه نمودارهای گرافیکی تعاملی.",
    mediaUrl: "/gifs/view.mp4",
    icon: BarChart3,
  },
  // ─── 8. افزودن فیلم و جدول ───
  {
    id: "movie-add-table",
    title: "افزودن فیلم و جدول مدیریت",
    description:
      "ثبت خودکار اطلاعات فیلم از مرجع TMDB شامل پوستر، تریلر، خلاصه داستان و عوامل. جدول پیشرفته مدیریت محتوا با قابلیت جستجو، فیلتر و ویرایش دسته‌ای.",
    mediaUrl: "/gifs/movie-add-table.mp4",
    icon: Film,
  },
  // ─── 7. خرید اشتراک ───
  {
    id: "buy-sub",
    title: "خرید اشتراک VIP",
    description:
      "رابط خرید پلن‌های اشتراک طلایی، نقره‌ای و برنزی با قیمت‌گذاری شفاف، اعمال کد تخفیف آنی و انتقال به درگاه پرداخت بانکی جهت فعال‌سازی خودکار حساب.",
    mediaUrl: "/gifs/buy-sub.mp4",
    icon: Crown,
  },
  // ─── 8. درگاه پرداخت ───
  {
    id: "payment-gateway",
    title: "درگاه پرداخت آنلاین",
    description:
      "اتصال به درگاه پرداخت زرین‌پال با تأیید خودکار تراکنش، صدور فاکتور الکترونیکی، پشتیبانی از کیف پول داخلی و ثبت کامل تاریخچه پرداخت‌های کاربران.",
    mediaUrl: "/gifs/payment-gateway.mp4",
    icon: Wallet,
  },
  // ─── 9. تنظیمات سیستم ───
  {
    id: "setting",
    title: "تنظیمات سیستم",
    description:
      "پیکربندی جامع سیستم شامل تنظیمات هویت سایت (لوگو، نام برند)، کلیدهای API، درگاه پیامک، تنظیمات سئو، کش سرور Redis و پارامترهای امنیتی پلیر.",
    mediaUrl: "/gifs/setting.mp4",
    icon: Settings,
  },
  // ─── 10. مدیریت پلن‌های اشتراک ───
  {
    id: "subscription",
    title: "مدیریت پلن‌های اشتراک",
    description:
      "تعریف و ویرایش تعرفه‌های اشتراک VIP با تنظیم مدت اعتبار، قیمت‌گذاری، سطح دسترسی محتوا و فعال‌سازی یا غیرفعال‌سازی هر پلن از پنل مدیریت.",
    mediaUrl: "/gifs/subscription.mp4",
    icon: CreditCard,
  },
  // ─── 11. سیستم کد تخفیف ───
  {
    id: "discount-code",
    title: "سیستم کد تخفیف",
    description:
      "ایجاد کدهای تخفیف درصدی و مبلغی با محدودیت زمانی، تعداد مصرف، اختصاص به پلن خاص و گزارش‌گیری از میزان استفاده هر کد توسط کاربران.",
    mediaUrl: "/gifs/discount-code.mp4",
    icon: Ticket,
  },
  // ─── 12. مدیریت ژانرها ───
  {
    id: "genre",
    title: "مدیریت ژانرها",
    description:
      "افزودن، ویرایش و حذف ژانرهای سینمایی با قابلیت تخصیص چندگانه به فیلم‌ها و سریال‌ها. نمایش گرید مرتب با جستجوی سریع و اسلاگ فارسی.",
    mediaUrl: "/gifs/genre.mp4",
    icon: Music,
  },
  // ─── 13. مدیریت کشورها ───
  {
    id: "country",
    title: "مدیریت کشورها",
    description:
      "ثبت کشورهای تولیدکننده محتوا با پرچم و کد بین‌المللی. امکان فیلتر فیلم‌ها بر اساس کشور سازنده در بخش عمومی سایت.",
    mediaUrl: "/gifs/country.mp4",
    icon: Globe,
  },
  // ─── 14. مدیریت دسته‌بندی‌ها ───
  {
    id: "category",
    title: "مدیریت دسته‌بندی‌ها",
    description:
      "ساختار درختی دسته‌بندی‌های محتوایی با قابلیت تعریف زیرمجموعه، تصویر شاخص اختصاصی و نمایش اتوماتیک در منوی ناوبری و فیلترهای جستجو.",
    mediaUrl: "/gifs/category.mp4",
    icon: FolderTree,
  },
  // ─── 15. مدیریت بازیگران ───
  {
    id: "actors",
    title: "مدیریت بازیگران",
    description:
      "ثبت پروفایل بازیگران و عوامل فیلم از TMDB با بیوگرافی فارسی، تصویر رسمی و فیلموگرافی. نمایش آرشیو بازیگران به صورت گرید دایره‌ای در سایت عمومی.",
    mediaUrl: "/gifs/actors.mp4",
    icon: Users,
  },
  // ─── 16. سیستم اعلان‌ها ───
  {
    id: "notification",
    title: "سیستم اعلان‌ها",
    description:
      "ارسال نوتیفیکیشن‌های سیستمی به کاربران شامل اطلاع‌رسانی محتوای جدید، یادآوری تمدید اشتراک، اعلام تخفیف‌های ویژه و پیام‌های مدیریتی.",
    mediaUrl: "/gifs/notification.mp4",
    icon: Bell,
  },
  // ─── 17. تنظیمات حساب کاربری ───
  {
    id: "user-setting",
    title: "تنظیمات حساب کاربری",
    description:
      "ویرایش اطلاعات پروفایل کاربر شامل تغییر آواتار، نام نمایشی، شماره موبایل، رمز عبور و مشاهده وضعیت اشتراک فعال با تاریخ انقضا.",
    mediaUrl: "/gifs/user-setting.mp4",
    icon: UserCog,
  },
  // ─── 18. پیکربندی صفحات ───
  {
    id: "pages-config",
    title: "پیکربندی صفحات",
    description:
      "مدیریت صفحات ایستای سایت مانند درباره ما، قوانین و مقررات، تماس با ما و سؤالات متداول با ویرایشگر متنی و تنظیمات سئوی اختصاصی هر صفحه.",
    mediaUrl: "/gifs/pages-config.mp4",
    icon: FileText,
  },
];
