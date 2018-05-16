const IconList = {
  Default: 'ios-navigate',
  Clear: 'md-sunny',
  Rain: 'md-rainy',
  Thunderstorm: 'md-thunerstorm',
  Clouds: 'md-cloudy',
  Snow: 'md-snow',
  Drizzle: 'md-umbrella',
};

const WeatherStatusList = {
  Clear: {
    backgroundImage: require('./../images/Sunny.png'),
    gradientFirstColor: '#FFD924',
    gradientSecondColor: '#F46E01',
    weatherType: 'တိမ်ကင်းစင်ပါတယ်',
    message: 'ရာသီဥတုသာသာယာယာဘဲဗျို့',
    messageDetail: 'အပြင်ထွက်ပြီး လျောက်သွားလို့ကောင်းမယ်...',
  },
  Rain: {
    backgroundImage: require('./../images/Rainy.png'),
    gradientFirstColor: '#17EAD9',
    gradientSecondColor: '#6078EA',
    weatherType: 'မိုးရွာပါ့မယ်',
    message: 'အပြင်ထွက်ရင်ထီးလေးတော့ယူသွားပါနော်',
    messageDetail: 'မေ့နေရင်လည်းမိုးရွာရင်မိုးရေချိုးမယ်ပေါ့ 😅',
  },
  Thunderstorm: {
    backgroundImage: require('./../images/ThunderStorm.png'),
    gradientFirstColor: '#7117EA',
    gradientSecondColor: '#EA6060',
    weatherType: 'မိုးထစ်ချုန်းရွာပါ့မယ်',
    message: 'အိမ်ထဲမှာဘဲနေမယ်',
    messageDetail: 'လျှပ်စီးလပ်မိုးကြိုးပြစ်တာကြောက်ရင်အိမ်ထဲမှာနေတာကောင်းပါတယ်',
  },
  Clouds: {
    backgroundImage: require('./../images/Cloudy.png'),
    gradientFirstColor: '#45E0A7',
    gradientSecondColor: '#D5E969',
    weatherType: 'တိမ်ထူထပ်ပါ့မယ်',
    message: 'ကောင်းကင်ကြီးကိုမော့ကြည့်မယ်',
    messageDetail: 'အပြင်ထွက်ပြီးလှပနေတဲ့ကောင်းကင်ကြီးကိုမော့ကြည့်လိုက်ပါ',
  },
  Snow: {
    backgroundImage: require('./../images/Snow.png'),
    gradientFirstColor: '#EFBFD5',
    gradientSecondColor: '#9D61FD',
    weatherType: 'နှင်းကျပါ့မယ်',
    message: 'နွေးနွေးထွေးထွေးနေမယ်',
    messageDetail: 'အပြင်မှာအေးတယ်... နွေးနွေးထွေးထွေးနေကမယ်',
  },
  Drizzle: {
    backgroundImage: require('./../images/Drizzle.png'),
    gradientFirstColor: '#23BCBA',
    gradientSecondColor: '#45E994',
    weatherType: 'မိုးဖွဲဖွဲရွာပါ့မယ်',
    message: 'မိုးဖွဲဖွဲလမ်းလျောက်',
    messageDetail: 'မိုးဖွဲဖွဲမှာလမ်းလျောက်ပြီးတွေးချင်တာလေးတွေတွေးနေရတာတော်တော်မိုက်တာဗျ',
  },
};

export { WeatherStatusList };
export default IconList;
