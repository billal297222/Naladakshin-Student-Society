export type Language = "en" | "bn"

export const translations = {
  en: {
    // Navigation
    nav: {
      home: "Home",
      about: "About Us",
      society: "The Society",
      donation: "Donation Center",
      agriculture: "Agriculture Help",
      contact: "Contact",
    },
    // Home Page
    home: {
      hero: {
        headline: "Building a Sustainable Future for Naladakshin",
        subheadline:
          "Through education, environmental care, and community support, we are creating lasting change in our village. Join us in making a difference.",
        mission: "Sustainable Development through Education, Medical Support, and Agriculture",
        donateBtn: "Donate Now",
        learnBtn: "Learn More",
      },
      stats: {
        title: "Our Impact",
        subtitle: "Transparency is at the heart of everything we do. Every taka donated is tracked and reported.",
        donations: "Total Donations",
        trees: "Trees Planted",
        students: "Students Supported",
        projects: "Active Projects",
      },
      wings: {
        title: "Our Wings",
        subtitle: "Four pillars supporting our community",
        environment: {
          title: "Environment Wing",
          description:
            "We plant trees along roadsides, near the mosque, and near the Eidgah to beautify our village and protect our environment. These trees provide shade, clean air, and create a greener future for generations to come. Your donations help us purchase saplings, maintain planted trees, and expand our green coverage across Naladakshin.",
          icon: "tree",
        },
        education: {
          title: "Education Wing",
          description:
            "Every month, we distribute books, notes, and pens to underprivileged students in our village. Education is the most powerful tool for breaking the cycle of poverty. By sponsoring a student, you invest in their future and the future of our community. Your support ensures that no child is left behind due to lack of school supplies.",
          icon: "book",
        },
        infrastructure: {
          title: "Infrastructure Support",
          description:
            "We work with the community to repair and improve small-scale roads and infrastructure. Better roads mean safer travel for children going to school, easier transport for farmers, and improved connectivity for everyone. Through collective effort and careful planning, we make daily life better for all villagers.",
          icon: "road",
        },
        agriculture: {
          title: "Agriculture Wing",
          description:
            "Our upcoming agriculture program will support local farmers with quality seeds, organic fertilizers, and modern farming techniques. By helping farmers increase their yield sustainably, we strengthen food security and economic stability in Naladakshin. This wing is in planning phase and will launch with your support.",
          icon: "wheat",
        },
      },
      trust: {
        title: "Why Trust NSS?",
        transparency: "Complete financial transparency with regular donation reports",
        community: "Led by local youth and guided by village elders",
        nonprofit: "Non-political, non-profit, purely community-focused",
        volunteer: "Run entirely by dedicated volunteers",
        accountable: "Every project documented with photos and receipts",
      },
    },
    // About Page
    about: {
      title: "About NSS",
      story: {
        title: "Our Story",
        content:
          "Naladakshin Student Society was born from a simple dream: to see our village thrive. A group of passionate young students, supported by respected village elders, came together to address the challenges our community faces. We saw students struggling without books, roads in poor condition, and a lack of organized community efforts. Rather than waiting for change, we decided to create it ourselves. NSS is the result of that determination—a grassroots movement driven by love for our village and commitment to its future.",
      },
      vision: {
        title: "Our Vision",
        content:
          "We envision a Naladakshin where every child has access to quality education, where green trees line every road, where farmers prosper with sustainable practices, and where infrastructure serves the community effectively. We are building a village that future generations will be proud to call home. This is not just about today—it is about creating lasting change that will benefit our children and their children.",
      },
      values: {
        title: "Core Values",
        transparency: {
          title: "Transparency",
          description: "Every donation is tracked, every expense documented, every project reported.",
        },
        sustainability: {
          title: "Sustainability",
          description: "We focus on long-term solutions that benefit the environment and community.",
        },
        community: {
          title: "Community Ownership",
          description: "This is not our project alone—it belongs to every person in Naladakshin.",
        },
        education: {
          title: "Education First",
          description: "We believe education is the foundation of all development and progress.",
        },
      },
    },
    // Society Page
    society: {
      title: "The Society",
      subtitle: "Led by community, guided by wisdom",
      advisory: {
        title: "Advisory Committee",
        description:
          "Our Advisory Committee consists of respected village elders, teachers, and experienced community members. They provide guidance, wisdom, and oversight to ensure NSS stays true to its mission. Their years of experience help us make sound decisions and maintain the trust of the community.",
      },
      organizing: {
        title: "Organizing Committee",
        description:
          "NSS operates with a flat leadership structure. We have no president or vice president. Instead, we believe in collective responsibility and teamwork. Every member of the organizing committee contributes equally, and decisions are made together. This ensures that power is distributed, and every voice is heard. We are students, farmers, teachers, and community members working side by side.",
      },
      join: {
        title: "Join Us",
        description:
          "NSS welcomes volunteers who share our vision. Whether you can contribute time, skills, or resources, there is a place for you in our society.",
        button: "Become a Volunteer",
      },
    },
    // Donation Page
    donation: {
      title: "Donation Center",
      subtitle: "Your generosity plants trees, educates children, and builds infrastructure",
      intro:
        "Every taka you donate goes directly to our projects. We maintain complete transparency with detailed reports on how funds are used. Your donation, no matter the size, makes a real difference in Naladakshin. You are not just giving money—you are investing in a better future for an entire community.",
      selectProject: "Select a Project",
      selectAmount: "Donation Amount",
      customAmount: "Custom Amount",
      paymentMethod: "Payment Method",
      bkash: "bKash",
      nagad: "Nagad",
      rocket: "Rocket",
      manual: {
        title: "Manual Payment Instructions",
        step1: "Send money to our verified account:",
        step2: "After payment, submit your Transaction ID below",
        step3: "Our team will verify and confirm your donation within 24 hours",
        step4: "You will receive a confirmation message with a receipt",
      },
      form: {
        name: "Your Name",
        email: "Email Address",
        phone: "Phone Number",
        transactionId: "Transaction ID",
        message: "Message (Optional)",
        submit: "Submit Donation",
      },
      thanks: {
        title: "Thank You!",
        message:
          "Your generosity will bring real change to Naladakshin. We have received your donation information and will verify it shortly. You will receive a confirmation email with a receipt. On behalf of the entire community, we deeply appreciate your support.",
      },
    },
    // Agriculture Help Page
    agriculture: {
      title: "Agriculture Help Desk",
      subtitle: "Supporting farmers with knowledge and guidance",
      intro:
        "Our Agriculture Help Desk is here to answer farmers' questions about crops, soil, pests, and modern farming techniques. We provide advice based on Cumilla region soil conditions and seasonal patterns. Whether you are an experienced farmer or just starting, we are here to help.",
      askQuestion: "Ask a Question",
      form: {
        name: "Your Name",
        phone: "Phone Number",
        village: "Village Name",
        question: "Your Question",
        submit: "Submit Question",
      },
      tips: {
        title: "Seasonal Tips",
        content: "Check back regularly for seasonal farming tips and best practices tailored to our region.",
      },
    },
    // Contact Page
    contact: {
      title: "Contact Us",
      subtitle: "We would love to hear from you",
      intro:
        "Whether you have questions, want to volunteer, or simply want to learn more about our work, please reach out. NSS is built on community connections, and every conversation helps us grow stronger.",
      form: {
        name: "Your Name",
        email: "Email Address",
        subject: "Subject",
        message: "Your Message",
        submit: "Send Message",
      },
      info: {
        title: "Get In Touch",
        location: "Location",
        locationValue: "Naladakshin, Homna, Cumilla, Bangladesh",
        email: "Email",
        phone: "Phone",
      },
      volunteer: {
        title: "Become a Volunteer",
        description:
          "Join our team of dedicated volunteers working to build a better Naladakshin. Your time and skills can make a real difference.",
      },
    },
    // Gallery Page
    gallery: {
      title: "Our Gallery",
      subtitle: "Capturing moments of change and community effort in Naladakshin",
      description: "Explore our recent activities, environmental projects, and community gatherings.",
    },
  },
  bn: {
    // Navigation
    nav: {
      home: "হোম",
      about: "আমাদের সম্পর্কে",
      society: "সংগঠন",
      donation: "দান কেন্দ্র",
      agriculture: "কৃষি সহায়তা",
      contact: "যোগাযোগ",
    },
    // Home Page
    home: {
      hero: {
        headline: "নালাদক্ষিণের জন্য টেকসই ভবিষ্যৎ গড়ছি",
        subheadline:
          "শিক্ষা, পরিবেশ সংরক্ষণ এবং কমিউনিটি সহায়তার মাধ্যমে আমরা আমাদের গ্রামে স্থায়ী পরিবর্তন আনছি। পরিবর্তনে আমাদের সাথে যুক্ত হন।",
        mission: "শিক্ষা, চিকিৎসা সহায়তা এবং কৃষির মাধ্যমে টেকসই উন্নয়ন",
        donateBtn: "এখনই দান করুন",
        learnBtn: "আরও জানুন",
      },
      stats: {
        title: "আমাদের প্রভাব",
        subtitle: "স্বচ্ছতা আমাদের সকল কাজের কেন্দ্রবিন্দু। প্রতিটি দান করা টাকা ট্র্যাক এবং রিপোর্ট করা হয়।",
        donations: "মোট দান",
        trees: "গাছ রোপণ",
        students: "শিক্ষার্থী সহায়তা",
        projects: "সক্রিয় প্রকল্প",
      },
      wings: {
        title: "আমাদের শাখাসমূহ",
        subtitle: "আমাদের সম্প্রদায়কে সমর্থনকারী চারটি স্তম্ভ",
        environment: {
          title: "পরিবেশ শাখা",
          description:
            "আমরা রাস্তার ধারে,মসজিদ এবং ঈদগাহের কাছে  গাছ রোপণ করি আমাদের গ্রামকে সুন্দর করতে এবং পরিবেশ রক্ষা করতে। এই গাছগুলি ছায়া, বিশুদ্ধ বাতাস প্রদান করে এবং আগামী প্রজন্মের জন্য একটি সবুজ ভবিষ্যৎ তৈরি করে। আপনার দান আমাদের চারা কিনতে, রোপিত গাছের রক্ষণাবেক্ষণ করতে এবং নালাদক্ষিণ জুড়ে আমাদের সবুজ আচ্ছাদন বিস্তৃত করতে সাহায্য করে।",
          icon: "tree",
        },
        education: {
          title: "শিক্ষা শাখা",
          description:
            "প্রতি মাসে, আমরা আমাদের গ্রামের দরিদ্র শিক্ষার্থীদের মধ্যে বই, নোট এবং কলম বিতরণ করি। দারিদ্র্যের চক্র ভাঙার জন্য শিক্ষা সবচেয়ে শক্তিশালী হাতিয়ার। একজন শিক্ষার্থীকে স্পন্সর করে, আপনি তাদের ভবিষ্যৎ এবং আমাদের সম্প্রদায়ের ভবিষ্যতে বিনিয়োগ করেন। আপনার সহায়তা নিশ্চিত করে যে স্কুল সামগ্রীর অভাবে কোনো শিশু পিছিয়ে থাকবে না।",
          icon: "book",
        },
        infrastructure: {
          title: "অবকাঠামো সহায়তা",
          description:
            "আমরা ছোট আকারের রাস্তা এবং অবকাঠামো মেরামত ও উন্নতির জন্য সম্প্রদায়ের সাথে কাজ করি। ভালো রাস্তা মানে স্কুলে যাওয়া শিশুদের জন্য নিরাপদ ভ্রমণ, কৃষকদের জন্য সহজ পরিবহন এবং সবার জন্য উন্নত সংযোগ। সম্মিলিত প্রচেষ্টা এবং সতর্ক পরিকল্পনার মাধ্যমে আমরা সকল গ্রামবাসীর দৈনন্দিন জীবনকে আরও ভালো করি।",
          icon: "road",
        },
        agriculture: {
          title: "কৃষি শাখা",
          description:
            "আমাদের আসন্ন কৃষি কর্মসূচি স্থানীয় কৃষকদের মানসম্মত বীজ, জৈব সার এবং আধুনিক চাষাবাদ কৌশল দিয়ে সহায়তা করবে। কৃষকদের টেকসইভাবে তাদের ফলন বৃদ্ধিতে সাহায্য করে আমরা নালাদক্ষিণে খাদ্য নিরাপত্তা এবং অর্থনৈতিক স্থিতিশীলতা শক্তিশালী করি। এই শাখা পরিকল্পনা পর্যায়ে রয়েছে এবং আপনার সহায়তায় চালু হবে।",
          icon: "wheat",
        },
      },
      trust: {
        title: "কেন NSS কে বিশ্বাস করবেন?",
        transparency: "নিয়মিত দান রিপোর্ট সহ সম্পূর্ণ আর্থিক স্বচ্ছতা",
        community: "স্থানীয় যুবকদের দ্বারা পরিচালিত এবং গ্রামের প্রবীণদের দ্বারা নির্দেশিত",
        nonprofit: "অরাজনৈতিক, অলাভজনক, সম্পূর্ণভাবে সম্প্রদায়-কেন্দ্রিক",
        volunteer: "সম্পূর্ণভাবে নিবেদিত স্বেচ্ছাসেবকদের দ্বারা পরিচালিত",
        accountable: "প্রতিটি প্রকল্প ফটো এবং রসিদ সহ নথিভুক্ত",
      },
    },
    // About Page
    about: {
      title: "NSS সম্পর্কে",
      story: {
        title: "আমাদের গল্প",
        content:
          "নালাদক্ষিণ স্টুডেন্ট সোসাইটি একটি সরল স্বপ্ন থেকে জন্ম নিয়েছে: আমাদের গ্রামকে সমৃদ্ধ দেখার স্বপ্ন। একদল উৎসাহী তরুণ শিক্ষার্থী, সম্মানিত গ্রামের প্রবীণদের সমর্থনে, আমাদের সম্প্রদায়ের চ্যালেঞ্জগুলি মোকাবেলা করতে একসাথে এসেছিল। আমরা দেখেছি শিক্ষার্থীরা বই ছাড়া সংগ্রাম করছে, রাস্তা খারাপ অবস্থায় এবং সংগঠিত কমিউনিটি প্রচেষ্টার অভাব। পরিবর্তনের জন্য অপেক্ষা না করে, আমরা নিজেরাই এটি তৈরি করার সিদ্ধান্ত নিয়েছি। NSS সেই দৃঢ়সংকল্পের ফল—আমাদের গ্রামের প্রতি ভালোবাসা এবং এর ভবিষ্যতের প্রতি প্রতিশ্রুতি দ্বারা চালিত একটি তৃণমূল আন্দোলন।",
      },
      vision: {
        title: "আমাদের দৃষ্টিভঙ্গি",
        content:
          "আমরা এমন একটি নালাদক্ষিণের স্বপ্ন দেখি যেখানে প্রতিটি শিশুর মানসম্মত শিক্ষার সুযোগ রয়েছে, যেখানে প্রতিটি রাস্তায় সবুজ গাছের সারি, যেখানে কৃষকরা টেকসই অনুশীলনে সমৃদ্ধ এবং যেখানে অবকাঠামো সম্প্রদায়কে কার্যকরভাবে সেবা করে। আমরা এমন একটি গ্রাম তৈরি করছি যা ভবিষ্যৎ প্রজন্ম তাদের বাড়ি বলে গর্বিত হবে। এটি শুধু আজকের বিষয় নয়—এটি স্থায়ী পরিবর্তন তৈরি করার বিষয় যা আমাদের শিশুদের এবং তাদের শিশুদের উপকার করবে।",
      },
      values: {
        title: "মূল মূল্যবোধ",
        transparency: {
          title: "স্বচ্ছতা",
          description: "প্রতিটি দান ট্র্যাক করা হয়, প্রতিটি খরচ নথিভুক্ত, প্রতিটি প্রকল্প রিপোর্ট করা হয়।",
        },
        sustainability: {
          title: "টেকসই উন্নয়ন",
          description: "আমরা দীর্ঘমেয়াদী সমাধানে মনোনিবেশ করি যা পরিবেশ এবং সম্প্রদায়কে উপকৃত করে।",
        },
        community: {
          title: "সম্প্রদায় মালিকানা",
          description: "এটি শুধু আমাদের প্রকল্প নয়—এটি নালাদক্ষিণের প্রতিটি ব্যক্তির অন্তর্গত।",
        },
        education: {
          title: "শিক্ষা প্রথম",
          description: "আমরা বিশ্বাস করি শিক্ষা সমস্ত উন্নয়ন এবং অগ্রগতির ভিত্তি।",
        },
      },
    },
    // Society Page
    society: {
      title: "সংগঠন",
      subtitle: "সম্প্রদায় দ্বারা পরিচালিত, প্রজ্ঞা দ্বারা নির্দেশিত",
      advisory: {
        title: "উপদেষ্টা কমিটি",
        description:
          "আমাদের উপদেষ্টা কমিটিতে সম্মানিত গ্রামের প্রবীণ, শিক্ষক এবং অভিজ্ঞ সম্প্রদায়ের সদস্যরা রয়েছেন। তারা নির্দেশনা, প্রজ্ঞা এবং তদারকি প্রদান করেন যাতে NSS তার মিশনে সত্য থাকে। তাদের বছরের অভিজ্ঞতা আমাদের সঠিক সিদ্ধান্ত নিতে এবং সম্প্রদায়ের বিশ্বাস বজায় রাখতে সাহায্য করে।",
      },
      organizing: {
        title: "সংগঠন কমিটি",
        description:
          "NSS একটি সমতল নেতৃত্ব কাঠামোর সাথে কাজ করে। আমাদের কোন সভাপতি বা সহ-সভাপতি নেই। পরিবর্তে, আমরা সম্মিলিত দায়িত্ব এবং দলবদ্ধ কাজে বিশ্বাস করি। সংগঠন কমিটির প্রতিটি সদস্য সমানভাবে অবদান রাখে এবং সিদ্ধান্তগুলি একসাথে নেওয়া হয়। এটি নিশ্চিত করে যে ক্ষমতা বিতরণ করা হয়েছে এবং প্রতিটি কণ্ঠস্বর শোনা যায়। আমরা ছাত্র, কৃষক, শিক্ষক এবং সম্প্রদায়ের সদস্য পাশাপাশি কাজ করছি।",
      },
      join: {
        title: "আমাদের সাথে যোগ দিন",
        description:
          "NSS স্বেচ্ছাসেবকদের স্বাগত জানায় যারা আমাদের দৃষ্টিভঙ্গি শেয়ার করেন। আপনি সময়, দক্ষতা বা সম্পদ অবদান রাখতে পারেন কিনা, আমাদের সমাজে আপনার জন্য একটি জায়গা আছে।",
        button: "স্বেচ্ছাসেবক হন",
      },
    },
    // Donation Page
    donation: {
      title: "দান কেন্দ্র",
      subtitle: "আপনার উদারতা গাছ রোপণ করে, শিশুদের শিক্ষিত করে এবং অবকাঠামো তৈরি করে",
      intro:
        "আপনার প্রতিটি টাকা সরাসরি আমাদের প্রকল্পে যায়। আমরা তহবিল কীভাবে ব্যবহার করা হয় তার বিস্তারিত রিপোর্ট সহ সম্পূর্ণ স্বচ্ছতা বজায় রাখি। আপনার দান, আকার যাই হোক না কেন, নালাদক্ষিণে প্রকৃত পার্থক্য তৈরি করে। আপনি শুধু টাকা দিচ্ছেন না—আপনি সম্পূর্ণ সম্প্রদায়ের জন্য একটি ভাল ভবিষ্যতে বিনিয়োগ করছেন।",
      selectProject: "একটি প্রকল্প নির্বাচন করুন",
      selectAmount: "দানের পরিমাণ",
      customAmount: "কাস্টম পরিমাণ",
      paymentMethod: "পেমেন্ট পদ্ধতি",
      bkash: "বিকাশ",
      nagad: "নগদ",
      rocket: "রকেট",
      manual: {
        title: "ম্যানুয়াল পেমেন্ট নির্দেশাবলী",
        step1: "আমাদের যাচাইকৃত অ্যাকাউন্টে টাকা পাঠান:",
        step2: "পেমেন্টের পরে, নীচে আপনার লেনদেন আইডি জমা দিন",
        step3: "আমাদের টিম ২৪ ঘন্টার মধ্যে আপনার দান যাচাই এবং নিশ্চিত করবে",
        step4: "আপনি একটি রসিদ সহ একটি নিশ্চিতকরণ বার্তা পাবেন",
      },
      form: {
        name: "আপনার নাম",
        email: "ইমেইল ঠিকানা",
        phone: "ফোন নম্বর",
        transactionId: "লেনদেন আইডি",
        message: "বার্তা (ঐচ্ছিক)",
        submit: "দান জমা দিন",
      },
      thanks: {
        title: "ধন্যবাদ!",
        message:
          "আপনার উদারতা নালাদক্ষিণে প্রকৃত পরিবর্তন আনবে। আমরা আপনার দান তথ্য পেয়েছি এবং শীঘ্রই এটি যাচাই করব। আপনি একটি রসিদ সহ একটি নিশ্চিতকরণ ইমেল পাবেন। সম্পূর্ণ সম্প্রদায়ের পক্ষে, আমরা আপনার সমর্থনের জন্য গভীরভাবে কৃতজ্ঞ।",
      },
    },
    // Agriculture Help Page
    agriculture: {
      title: "কৃষি সহায়তা ডেস্ক",
      subtitle: "জ্ঞান এবং নির্দেশনার সাথে কৃষকদের সমর্থন করা",
      intro:
        "আমাদের কৃষি সহায়তা ডেস্ক ফসল, মাটি, কীটপতঙ্গ এবং আধুনিক চাষাবাদ কৌশল সম্পর্কে কৃষকদের প্রশ্নের উত্তর দিতে এখানে রয়েছে। আমরা কুমিল্লা অঞ্চলের মাটির অবস্থা এবং মৌসুমী প্যাটার্নের উপর ভিত্তি করে পরামর্শ প্রদান করি। আপনি একজন অভিজ্ঞ কৃষক হন বা শুধু শুরু করছেন, আমরা সাহায্য করতে এখানে আছি।",
      askQuestion: "একটি প্রশ্ন জিজ্ঞাসা করুন",
      form: {
        name: "আপনার নাম",
        phone: "ফোন নম্বর",
        village: "গ্রামের নাম",
        question: "আপনার প্রশ্ন",
        submit: "প্রশ্ন জমা দিন",
      },
      tips: {
        title: "মৌসুমী টিপস",
        content: "আমাদের অঞ্চলের জন্য উপযুক্ত মৌসুমী চাষাবাদ টিপস এবং সর্বোত্তম অনুশীলনের জন্য নিয়মিত চেক করুন।",
      },
    },
    // Contact Page
    contact: {
      title: "যোগাযোগ করুন",
      subtitle: "আমরা আপনার কাছ থেকে শুনতে চাই",
      intro:
        "আপনার প্রশ্ন থাকুক, স্বেচ্ছাসেবক হতে চান বা কেবল আমাদের কাজ সম্পর্কে আরও জানতে চান, দয়া করে যোগাযোগ করুন। NSS সম্প্রদায়ের সংযোগের উপর নির্মিত, এবং প্রতিটি কথোপকথন আমাদের আরও শক্তিশালী হতে সাহায্য করে।",
      form: {
        name: "আপনার নাম",
        email: "ইমেইল ঠিকানা",
        subject: "বিষয়",
        message: "আপনার বার্তা",
        submit: "বার্তা পাঠান",
      },
      info: {
        title: "যোগাযোগ",
        location: "অবস্থান",
        locationValue: "নালাদক্ষিণ, হোমনা , কুমিল্লা, বাংলাদেশ",
        email: "ইমেইল",
        phone: "ফোন",
      },
      volunteer: {
        title: "স্বেচ্ছাসেবক হন",
        description:
          "একটি ভাল নালাদক্ষিণ তৈরির জন্য কাজ করা আমাদের নিবেদিত স্বেচ্ছাসেবকদের দলে যোগ দিন। আপনার সময় এবং দক্ষতা প্রকৃত পার্থক্য তৈরি করতে পারে।",
      },
    },
    // Gallery Page
    gallery: {
      title: "আমাদের গ্যালারি",
      subtitle: "নালাদক্ষিণে পরিবর্তনের মুহূর্ত এবং সম্প্রদায়ের প্রচেষ্টার ছবি",
      description: "আমাদের সাম্প্রতিক কার্যক্রম, পরিবেশগত প্রকল্প এবং সম্প্রদায়ের সমাবেশের ছবি দেখুন।",
    },
  },
}

export function getTranslation(lang: Language) {
  return translations[lang]
}
