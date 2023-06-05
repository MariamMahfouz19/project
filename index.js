const express = require("express");
const bodyParser = require("body-parser");
const InitiateMongoServer = require("./config/db");
require('dotenv').config()
const axios = require('axios')
//Routes
const doctorUser = require("./routes/user"); //new addition
const dynpgfrdrRoute = require("./routes/dynpgfrdr"); 
const changepassword = require("./routes/changepassword");
const patientUser = require("./routes/patientLogIN");
const allDoctors = require("./routes/allDoctors");
const doctorProfile = require("./routes/doctorProfile");
const cancer_Type = require('./routes/genralCancerInfo');
const times_of_drugs = require('./routes/times_of_drugs');
const communicationWayswithDr = require('./routes/communicationWayswithDr')
const abnormalSymptoms = require('./routes/abnormalSymptoms')
const Appointment = require('./routes/appiontments')
//
//
//
//
//
//
//
//

//const cors = require('cors');
//const cookieParser = require('cookie-parser');
const auth = require('./routes/resetpassword');
//
// Initiate Mongo Server
InitiateMongoServer();

const app = express();

// PORT
const PORT = process.env.PORT || 4000;

// Middleware
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({ message: "API Working" });
});
//Log Out 

/**
 * Router Middleware
 * Router - /user/*
 * Method - *
 */
app.use("/doctor", doctorUser);
app.use("/patient", patientUser);
app.use("/alldoctors", allDoctors);
app.use("/doctorprofile", doctorProfile);
app.listen(PORT, async () => {
  console.log('🚀 app running on port', PORT)
  //await init()
});


//Cruds
app.use('/appointment', Appointment)
app.use('/api/patient', dynpgfrdrRoute)
app.use('/setting', auth)
require('./helpers/extend-node-input-validator')
//app.use('/changepassword',changepassword )
app.use('/cancer', cancer_Type)
app.use('/drug_times', times_of_drugs)
app.use('/communicationWays', communicationWayswithDr)
app.use('/symptoms', abnormalSymptoms)





//Telegram CHATBOT:
/*
const { TOKEN, SERVER_URL } = process.env
const TELEGRAM_API = `https://api.telegram.org/bot${TOKEN}`
const URI = `/webhook/${TOKEN}`
const WEBHOOK_URL = SERVER_URL + URI



const init = async () => {
    const res = await axios.get(`${TELEGRAM_API}/setWebhook?url=${WEBHOOK_URL}`)
    console.log(res.data)
}

app.post(URI, async (req, res) => {
    console.log(req.body)

    const chatId = req.body.message.chat.id
    const text = req.body.message.text

    await axios.post(`${TELEGRAM_API}/sendMessage`, {
        chat_id: chatId,
        text: text
    })
    return res.send()
})

/*app.listen(process.env.PORT || 5000, async () => {
    console.log('🚀 app running on port', process.env.PORT || 5000)
    await init()
})*/

//Active Telegram CHATBOT:
/*const { Telegraf } = require('telegraf');

const bot = new Telegraf(process.env.BOT_TOKEN);



bot.command('ethereum', ctx => {
  var rate;
  console.log(ctx.from)
  axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd`)
  .then(response => {
    console.log(response.data)
    rate = response.data.ethereum
    const message = `Hello, today the ethereum price is ${rate.usd}USD`
    bot.telegram.sendMessage(ctx.chat.id, message, {
    })
  })
})
bot.command('start', ctx => {
  console.log(ctx.from)
  bot.telegram.sendMessage(ctx.chat.id, `
  In the name of God.. 🙏🏻
The Most Merciful, the Most Merciful, and may prayers and peace be upon the most honorable of messengers, our master Muhammad and his family and companions all..ﷺ
Welcome to our personal assistant to help answer some common questions about cancer..🤝
It was programmed by Ahmed Ayman Al-Saee..🫰🏻
BOT Question About Cancer :
/Does_human_height_affect_the_spread_of_cancer
/Can_cancer_be_treated_by_stopping_sugar
/Do_fresheners_and_deodorants_increase_the_prevalence_of_cancer
/Does_mobile_phone_radiation_affect_the_spread_of_cancer
/Does_mammography_prevent_the_spread_of_breast_cancer
/To_what_degree_does_the_genetic_factor_play_a_role_in_the_possibility_of_developing_breast_cancer
/What_do_we_do_in_order_to_deal_with_the_disease_if_there_is_a_history_of_disease_in_the_family
/Can_men_and_children_get_breast_cancer
/If_a_woman_becomes_ill_during_pregnancy_can_this_affect_the_health_of_the_fetus
/How_can_a_woman_detect_breast_cancer
/At_what_age_should_we_start_undergoing_medical_examinations_related_to_breast_cancer
/How_dangerous_is_the_pill__Could_it_be_a_cause_of_breast_cancer
/Does_chemo_cause_weight_gain_than_normal
/Does_the_chemical_cause_forgetfulness_or_poor_memory
/What_exercises_can_a_breast_cancer_patient_do
/What_are_the_stages_of_the_spread_of_cancer
/How_do_viruses_cause_cancer
/What_blood_diseases_can_lead_to_leukemia
/What_are_the_complications_of_chronic_lymphocytic_leukemia
/Can_cancer_in_general_and_leukemia_in_particular_be_completely_cured
/What_is_a_malignant_breast_tumor_or_what_is_known_as_breast_cancer
/There_are_many_breast_problems_in_women__are_they_all_related_to_malignant_tumors
s/Has_science_been_able_to_identify_known_causes_of_malignant_breast_tumor
/Is_it_possible_to_prevent_this_tumor
/What_is_the_importance_of_early_detection
/How_do_we_avoid_misdiagnosis
  ------------------------------
BOT Question From 57375 About Cancer Drugs :
/What_is_the_definition_of_chemotherapy
/How_does_chemotherapy_work
/What_does_chemotherapy_do
/What_are_the_uses_of_chemotherapy
/How_does_a_doctor_determine_what_type_of_chemotherapy_a_patient_will_receive
/Where_does_the_patient_get_chemotherapy
/How_does_the_body_react_to_chemotherapy
/Can_a_dose_of_chemotherapy_be_missed
For End Chat With BOT, Please Write /End Command.   
  `, {
  })
})
//أسئله عن السرطان
bot.command('Does_human_height_affect_the_spread_of_cancer', ctx => {
  console.log(ctx.from)
  bot.telegram.sendMessage(ctx.chat.id, 'تؤيد دراسات حديثة عديدة هذه النظرية، إذ تقول بعض الدراسات إن انتشار مرض السرطان يرتبط بالبيئة التي ينشأ فيها الإنسان، ومراحل تطور الإنسان في الطفولة، ولذلك يعتقد أن نمو الإنسان الكبير يزيد بصورة طفيفة نسبة انتشار مرض السرطان', {
  })
})
bot.command('Can_cancer_be_treated_by_stopping_sugar', ctx => {
  console.log(ctx.from)
  bot.telegram.sendMessage(ctx.chat.id, 'تقول أبحاث قديمة إن التوقف عن تناول السكر يقلل من انتشار مرض السرطان لأن الخلايا السرطانية تحتاج إلى الغلوكوز والسكر لإتمام عملية التمثيل الغذائي ، في حين أن الخلايا الاعتيادية يمكنها الاستفادة من الدهون والكيتونات في عملية التمثيل الغذائي . وبعض التجارب على الحيوانات أثبتت نجاح تجربة تقليل السكريات على انتشار الخلايا السرطانية ، لكن تجارب أخرى بينت أن بعض الخلايا السرطانية بدأت تتعايش مع الحالة الجديدة دون سكريات .', {
  })
})
bot.command('Do_fresheners_and_deodorants_increase_the_prevalence_of_cancer', ctx => {
  console.log(ctx.from)
  bot.telegram.sendMessage(ctx.chat.id, 'تحتوي معظم مزيلات الروائح على الألمنيوم لأنه يقلل من إفراز العرق ويزيد من التغلب على الرائحة، لكنه يشكل خطرا على نظام الأعصاب في جسم الإنسان حسب تقارير الدائرة الاتحادية لقياس المخاطر في ألمانيا. أما المؤسسة الأوروبية لمراقبة المواد الغذائية فقد أصدرت من جانبها تقريرا يحدد أضرار الألمنيوم على جسم الإنسان، وأوضحت فيه النسبة التي يمكن أن تحتويها المواد الغذائية من الألمنيوم، ونصحت بأن لا تتجاور ميليغراما واحدا لكل كيلوغرام من وزن الجسم. ومن يستعمل مزيلات الروائح بصورة مستمرة فإنه يتجاوز هذه النسبة القليلة، ولذلك تزداد نسبة الإصابة بالأمراض أو التأثير على الجهاز العصبي للإنسان. ورغم ذلك لا توجد أية إثباتات علمية تؤكد تأثير الألمنيوم على نسبة الإصابة بمرض السرطان.', {
  })
})
bot.command('Does_mobile_phone_radiation_affect_the_spread_of_cancer', ctx => {
  console.log(ctx.from)
  bot.telegram.sendMessage(ctx.chat.id, 'نشرت منظمة الصحة العالمية تقريرا عام 2011 بينت فيه آثار الإشعاعات الناجمة من محطات الإرسال ومن الجوال والرادارات وأنها قد تزيد نسبة الإصابة بمرض السرطان. كما أن دراسة أخرى تحدثت عن تأثير الجوال على زيادة نسبة الإصابة بسرطان الدماغ لمن يستعمل الجوال كثيرا. ورغم ذلك لم تثبت الأبحاث العلمية بصورة مؤكدة تأثير الجوال على زيادة نسبة الإصابة بالمرض، خاصة أن الدراسات السابقة لم توضح كيف تؤثر الإشعاعات على انتشار الخلايا السرطانية.', {
  })
})
bot.command('Does_mammography_prevent_the_spread_of_breast_cancer', ctx => {
  console.log(ctx.from)
  bot.telegram.sendMessage(ctx.chat.id, 'هذا الاعتقاد خاطئ حسب موقع شبيغل أونلاين الإلكتروني، فتصوير الثدي الشعاعي وسيلة تشخيصية فقط ولا يمكنه إيقاف أو منع الخلايا السرطانية من الانتشار. ويستعمل التصوير الشعاعي فقط لمعرفة هل مرض السرطان موجود أو لا، ولمعرفة درجة انتشاره في الجسم', {
  })
})
bot.command('To_what_degree_does_the_genetic_factor_play_a_role_in_the_possibility_of_developing_breast_cancer', ctx => {
  console.log(ctx.from)
  bot.telegram.sendMessage(ctx.chat.id, 'إذا كانت القرابة من الدرجة الأولى فيكون للعامل الوراثي دور كبير في الإصابة بالمرض.', {
  })
})
bot.command('What_do_we_do_in_order_to_deal_with_the_disease_if_there_is_a_history_of_disease_in_the_family', ctx => {
  console.log(ctx.from)
  bot.telegram.sendMessage(ctx.chat.id, 'لا بد من إجراء الفحوصات بشكل دوري خاصة في حال إصابة أحد أفراد العائلة في سن صغير، فهذه العوامل تستدعي إجراء الفحص الجيني لتحديد احتمال الإصابة', {
  })
})
bot.command('Can_men_and_children_get_breast_cancer', ctx => {
  console.log(ctx.from)
  bot.telegram.sendMessage(ctx.chat.id, 'لا يمكن إصابة الأطفال بسرطان الثدي ولكن يمكن الرجال بنسبة 1.5%.', {
  })
})
bot.command('If_a_woman_becomes_ill_during_pregnancy_can_this_affect_the_health_of_the_fetus', ctx => {
  console.log(ctx.from)
  bot.telegram.sendMessage(ctx.chat.id, 'لا تتأثر صحة الجنين في حال الإصابة بسرطان الثدي ولكن يمكن أن تضطر الحامل لإسقاط الجنين في الثلاث الشهور الأولى من فترة الحمل ويتوقف ذلك على المرحلة المرضية التي وصلت إليها.', {
  })
})
bot.command('How_can_a_woman_detect_breast_cancer', ctx => {
  console.log(ctx.from)
  bot.telegram.sendMessage(ctx.chat.id, 'إذا كانت العائلة لديها تاريخ مرضي فذلك ينذر باحتمالية الإصابة، وفي حال ملاحظة المرأة لأي أعراض غريبة في الثدي يجب عليها استشارة الطبيب وإجراء الفحوصات اللازمة.', {
  })
})
bot.command('At_what_age_should_we_start_undergoing_medical_examinations_related_to_breast_cancer', ctx => {
  console.log(ctx.from)
  bot.telegram.sendMessage(ctx.chat.id, 'بعد سن البلوغ، ولكن بعد سن الـ 40 ترتفع احتمالية الإصابة بالمرض، ولا يوجد سن معين نستطيع إبعاده عن احتمالية الإصابة بالمرض.', {
  })
})
bot.command('How_dangerous_is_the_pill__Could_it_be_a_cause_of_breast_cancer', ctx => {
  console.log(ctx.from)
  bot.telegram.sendMessage(ctx.chat.id, 'لا أفضل تناول حبوب منع الحمل لأنها تؤثر على الهرمونات، وتختلف حبوب منع الحمل التي تتناسب مع كل جسم، فهناك حبوب تتناسب مع سيدة ولا تتناسب مع الأخرى، وعند تناولها يجب أن تكون تحت الملاحظة الطبية، ولا توجد علاقة مباشرة بين الإصابة بالمرض وتناول حبوب منع الحمل.', {
  })
})
bot.command('Does_chemo_cause_weight_gain_than_normal', ctx => {
  console.log(ctx.from)
  bot.telegram.sendMessage(ctx.chat.id, 'الكيماوي لا يتسبب في زيادة الوزن ولكن العلاج الهرموني يمكن أن يتسبب في زيادته.', {
  })
})
bot.command('Does_the_chemical_cause_forgetfulness_or_poor_memory', ctx => {
  console.log(ctx.from)
  bot.telegram.sendMessage(ctx.chat.id, 'لا يؤثر الكيماوي على الذاكرة بأي شكل.', {
  })
})
bot.command('What_exercises_can_a_breast_cancer_patient_do', ctx => {
  console.log(ctx.from)
  bot.telegram.sendMessage(ctx.chat.id, 'تمارين للكتف والمشي واليوجا وغيرها من التمارين التي يمكن استشارة الطبيب فيها.', {
  })
})
bot.command('What_are_the_stages_of_the_spread_of_cancer', ctx => {
  console.log(ctx.from)
  bot.telegram.sendMessage(ctx.chat.id, 'بشكل عام يمكن القول بأن مرض السرطان تقسم إلى ثلاث: مرحلة الانتشار في موضع النشوء، ومرحلة الانتشار في منطقة النشوء، ومرحلة الانتشار العام.', {
  })
})
bot.command('How_do_viruses_cause_cancer', ctx => {
  console.log(ctx.from)
  bot.telegram.sendMessage(ctx.chat.id, 'هناك بعض الفيروسات التي تتميز بقدرتها على التسبب بالأورام مثل فيرس التهاب الكبد الوبائي من نوع ب، أو الفيرس الذي يسبب أورام البلعوم والأنف، وقد بينت الدراسات وجود علاقة لهذا الفيروس ببعض الأورام الليمفاوية التي تظهر بعد زراعة الأعضاء أو عند مرضى الإيدز.', {
  })
})
bot.command('What_blood_diseases_can_lead_to_leukemia', ctx => {
  console.log(ctx.from)
  bot.telegram.sendMessage(ctx.chat.id, 'هناك أمراض غير خبيثة بالدم يمكن لها بعد سنوات أن تتحول إلى أمراض خبيثة، مثل فقر الدم اللاتنسجي ومرض تكسر كريات الدم الحمراء الليلي الفجائي، وهناك أمراض دم خبيثة مزمنة تتحول إلى سرطان دم حاد بعد سنوات مثل تكاثر كريات الدم الحقيقي وتليف النخاع العظمي وسرطان الدم المزمن النخاعي أو الليمفاوي.', {
  })
})
bot.command('What_are_the_complications_of_chronic_lymphocytic_leukemia', ctx => {
  console.log(ctx.from)
  bot.telegram.sendMessage(ctx.chat.id, `تشمل مضاعفات مرض سرطان الدم الليمفاوي المزمن ما يلي:

  تضخم كبير في الغدد الليمفاوية بحيث يمكن أن يصل حجم الغدة الليمفاوية إلى أكثر من 5 سم
  فقر دم ونقصان الصفائح الدموية بشكل شديد جدا، ينتج عنه ميل إلى النزيف تحت الجلد أو في أعضاء أخرى حساسة من الجسم
  الأمراض المناعية: يترافق مرض السرطان في بعض الأحيان مع حدوث خلل في عمل جهاز المناعة في جسم المريض بحيث يصبح جهاز المناعة لديه يكون أجساما مضادة تهاجم وتحطم كريات الدم الحمراء أو الصفائح الدموية بالرغم من إنتاجها بدرجة كافية في النخاع العظمي فيؤدي ذلك إلى فقر دم يرقان أو انخفاض الصفائح الدموية مع الميل إلى النزيف
  نقصان الأجسام المضادة مما يجعل المريض أكثر عرضة للإصابة بأنواع مختلفة من العدوى البكتيرية`, {
  })
})
bot.command('Can_cancer_in_general_and_leukemia_in_particular_be_completely_cured', ctx => {
  console.log(ctx.from)
  bot.telegram.sendMessage(ctx.chat.id, 'الشفاء التام من مرض السرطان ممكن في العديد من أنواع السرطان بواسطة العلاج الجراحي المترافق مع العلاج الإشعاعي أو الدوائي أو كليهما معا، وهذا ينطبق على الأنواع المذكورة من السرطان في حال اكتشافها وهي لم تنتشر بعد خارج موضع النشوء أو بنسبة أقل في حال كونها محدودة ضمن منطقة النشوء إلى جانب ذلك هناك العديد من أنواع السرطان التي يمكن الشفاء منها بشكل تام في حال انتشارها، ومن أشهر هذه السرطانات سرطان الدم أو الأورام الليمفاوية الخبيثة .', {
  })
})
bot.command('What_is_a_malignant_breast_tumor_or_what_is_known_as_breast_cancer', ctx => {
  console.log(ctx.from)
  bot.telegram.sendMessage(ctx.chat.id, 'هو ورم خبيث ينشأ في أنسجة الثدي، نتيجة نمو الخلايا الموجودة في قنوات الحليب نمواً غير طبيعياً، خارج عن السيطرة، بسبب حدوث طفرة في الحمض النووي للخلايا، ومع تطور المرض ينتشر الورم الخبيث إلى أجزاء أخرى من الجسم، منها العقد اللمفاوية، أو الجلد، أو العظام، أو الكبد، أو الدماغ .', {
  })
})
bot.command('There_are_many_breast_problems_in_women__are_they_all_related_to_malignant_tumors', ctx => {
  console.log(ctx.from)
  bot.telegram.sendMessage(ctx.chat.id, 'قلة منها مرتبط بالورم الخبيث، أي أن ما نسبته (٪90) من مشاكل الثدي عند السيدات لا علاقة له بالأورام وآلام الثدي ناتجة عن استخدام المنبهات والتدخين والكحول والعلاج الهرموني، ومعظم الكتل حميدة، خاصة في عمر ما قبل ٤٠ عام ولكن ينبغي استشارة الطبيب المختص دائما للتأكد', {
  })
})
bot.command('Has_science_been_able_to_identify_known_causes_of_malignant_breast_tumor', ctx => {
  console.log(ctx.from)
  bot.telegram.sendMessage(ctx.chat.id, `ليس هناك أسباب محددة، ولكن توجد عوامل تزيد من فرصة أو احتمالية حدوثه، إلا أن وجود هذه العوامل لا يعني أن الإصابة بالمرض هو أمر حتمي، ومن هذه العوامل : العمر حيث تزداد نسبة الإصابة كلما تقدمت المرأة بالعمر، ولهذا نلاحظ أن نحو (50%) من الحالات يتم تشخيصها بعد سن الخمسين السنة في العالم العربي وبعد سن الستين في العالم الغربي – شعوبنا عامة أصغر عمرا .

  ومن العوامل الأخرى العلاج الهرموني ( وخاصة الحبوب التي تحتوي على البروجستين)، وحدوث الطمث في سن مبكرة (قبل ال 11 سنة)، وعدم الإنجاب أو تأخر حدوث الحمل لما بعد سن الخامسة والثلاثين، والامتناع عن الرضاعة الطبيعية، ووجود تاريخ شخصي أو عائلي للإصابة بالمرض،
  
  كما تلعب الجينات دوراً في حدوث المرض فوجود طفرات في بعض الجينات يزيد من احتمالية الإصابة ولكن نسبة الوراثة لا تتجاوز 5-10% من الحالات، علاوة على ذلك فإن العوامل البيئية وأسلوب الحياة مثل السمنة الزائدة والتعرض للأشعة حتي العلاجية والموارد الكيماوية تساهم في زيادة احتمال الإصابة .`, {
  })
})
bot.command('Is_it_possible_to_prevent_this_tumor', ctx => {
  console.log(ctx.from)
  bot.telegram.sendMessage(ctx.chat.id, 'ممارسة الحياة بصورة صحية تساعد في حماية الإنسان من الأمراض بشكل عام ومنها الأورام ومن هذه السلوكيات التركيز على الغذاء الصحي (الخضار والفواكه والتقليل من اللحوم الحمراء وليس الامتناع عنها)، وممارسة الرياضة بانتظام وخاصة رياضة المشي، المحافظة على وزن ضمن المعقول (لا يزيد ولا ينقص عن 15-20 كجم عن الوزن المثالي)، والابتعاد طبعاً عن التدخين بكل أشكاله وصوره وعن الكحول .', {
  })
})
bot.command('What_is_the_importance_of_early_detection', ctx => {
  console.log(ctx.from)
  bot.telegram.sendMessage(ctx.chat.id, `الفحص الذاتي والفحص الدوري والكشف المبكر، أهمية بالغة جداً في مواجهة ورم الثدي، حيث تتجاوز نسبة الشفاء من مرض السرطان  (90%) من الحالات التي يتم تشخيصها في المرحلة الأولى وفي ظل تطور علاج الورم الخبيث، أصبحت أهمية الكشف المبكر فعلياً مرتبطة بتوجه السيدة للطبيب مبكراً في حال ملاحظة أي تغيرات جديدة على الثدي وليس فقط عن طريق التصوير السنوي (فحص الماموغرام)

  إذ إن فحص الماموغرام قد يكتشف الورم بحجم صغير قبل أن يكون ملموساً، ولكن حتى لو اكتشفت السيدة نفس الورم (إذا كانت تمارس الفحص الذاتي بانتظام)، فمن الممكن أن يستدعي نفس العلاج فيما لو تم كشفه عن طريق الماموغرام لأن نوعية مرض السرطان أصبحت تلعب دورا مهما في تحيد العلاج المناسب وليس ا حجمه فقط، ومن الجدير بالذكر أن (20%) من الأورام لا تظهر في فحص الماموغرام وإنما بالفحص السريري والعكس صحيح`, {
  })
})
bot.command('How_do_we_avoid_misdiagnosis', ctx => {
  console.log(ctx.from)
  bot.telegram.sendMessage(ctx.chat.id, `التوجه إلى ذوي الاختصاص وعدم التسرع في اتخاذ قرار بناء على رأي طبيب واحد هو أمن الطرق ليس فقط للتشخيص السليم وإنما العلاج السليم، فكثير من الحالات تكون أورام حميدة وتحتاج إلى متابعة فقط وإذا كانت أورام خبيثة فإنها تحتاج إلى علاج قبل الجراحة، وحتى في حال إجراء الجراحة إذا لم تكن تامة، ستؤخر علاج المريضة. لأنها ستحتاج إلى جراحة مكملة قبل أن تأخذ العلاج السليم. ولا أستطيع أن أؤكد وأشجع على أهمية العلاج المناسب قبل الجراحة بصورة كافية، فإن هذا هو توجه الطب الحديث حاليا، وتأخير الجراحة بحثا عن العلاج المناسب لأسبوع أو اثنين لا يؤدي إلى انتشار الورم على العكس من الاعتقاد السائد .`, {
  })
})
//أسئله عن أدويه السرطان من57357
bot.command('What_is_the_definition_of_chemotherapy', ctx => {
  console.log(ctx.from)
  bot.telegram.sendMessage(ctx.chat.id, 'العلاج الكيميائي عبارة عن أدوية، تقوم بتدمير والقضاء على الخلايا السريعة النمو وإيقاف نموها وانقسامها.', {
  })
})
bot.command('How_does_chemotherapy_work', ctx => {
  console.log(ctx.from)
  bot.telegram.sendMessage(ctx.chat.id, 'العلاج الكيميائي يعمل من خلال وقف أو إبطاء نمو الخلايا السرطانية، والتي تنمو وتنقسم بسرعة. ولكن يُمكن أن يضر الخلايا السليمة، مثل تلك التى تبطن الفم والأمعاء أو المسئولة عن نمو الشعر. تلف الخلايا السليمة، يتسبب في آثار جانبية، والتي تتحسن أو تختفي بمجرد انتهاء العلاج الكيميائي.', {
  })
})
bot.command('What_does_chemotherapy_do', ctx => {
  console.log(ctx.from)
  bot.telegram.sendMessage(ctx.chat.id,` يختلف نوع العلاج الكيميائي حسب نوع الإصابة بالسرطان، ومدى تفاقم الحالة، يُمكن للعلاج الكيميائي أن يقوم بـ:

  علاج السرطان:
  حيث يُدمر العلاج الكيميائي الخلايا السرطانية في الجسم، ويتأكد أنها لن تنمو مرة أخرى.
  
  تخفيف أعراض السرطان أو العلاج التلطيفي:
  حيث يعمل العلاج الكيميائي على تقليص الأورام التي تسبب الألم.
  
  أنواع العلاج الكيميائي:
  
  علاج كيميائي
  علاج إشعاعي
  علاج جراحي`, {
  })
})
bot.command('What_are_the_uses_of_chemotherapy', ctx => {
  console.log(ctx.from)
  bot.telegram.sendMessage(ctx.chat.id, `في بعض الأحيان، يتم استخدام العلاج الكيميائي وحده لعلاج السرطان. ولكن في كثير من الأحيان، يُستخدم بجانب العلاج الكيميائي، الجراحة أو العلاج الإشعاعي أو العلاج البيولوجي.

  العلاج الكيميائي يُمكن أن:
  
  يساعد على تقليص الورم قبل الجراحة أو العلاج الإشعاعي، وهذا ما يُسمى بالعلاج الكيميائي المساعد الابتدائي.
  يُساعد على تدمير الخلايا السرطانية التي قد تبقى بعد الجراحة أو العلاج الإشعاعي، وهذا ما يُسمى بالعلاج الكيميائي المساعد.
  يقوم بمساعدة العلاج الإشعاعي والعلاج البيولوجي ليعمل على نحو أفضل.
  يُدمر الخلايا السرطانية التي قد ارتدت مرة أخرى أو التي انتشرت إلى أجزاء أخرى من الجسم.`, {
  })
})
bot.command('How_does_a_doctor_determine_what_type_of_chemotherapy_a_patient_will_receive', ctx => {
  console.log(ctx.from)
  bot.telegram.sendMessage(ctx.chat.id, `
  هذا الاختيار يعتمد على:

  نوع السرطان المصاب به المريض، حيث تستخدم بعض أدوية العلاج الكيميائي لأنواع عديدة من السرطان، وتُستخدم أدوية أخرى لنوع واحد فقط أو نوعين من السرطان.
  ما إذا كان قد حصل على علاج كيميائي من قبل.
  ما إذا كان لدى المريض مشاكل صحية أخرى، مثل مرض السكري أو أمراض القلب.
  `, {
  })
})
bot.command('Where_does_the_patient_get_chemotherapy', ctx => {
  console.log(ctx.from)
  bot.telegram.sendMessage(ctx.chat.id, `قد يتلقى المريض العلاج الكيميائي أثناء الإقامة في المستشفى، أو في وحدة علاج اليوم الواحد.

  سيتابع الطبيب والممرضة الآثار الجانبية للعلاج، ويقومان بإجراء اللازم، ويمكن أخذ العلاج بالمنزل، في حالة العلاج الكيميائي المكثف للمريض من أسبوعين إلى ثلاثة أسابيع حتى يعود النخاع.`, {
  })
})
bot.command('How_does_the_body_react_to_chemotherapy', ctx => {
  console.log(ctx.from)
  bot.telegram.sendMessage(ctx.chat.id,`قد يتم تلقي العلاج الكيميائي على شكل دورات. الدورة هي فترة من العلاج الكيميائي، تليها فترة من الراحة. على سبيل المثال، قد يتلقى أسبوعًا من العلاج الكيميائي، يليه ثلاثة أسابيع من الراحة. هذه الأربعة أسابيع، تشكل دورة واحدة. فترة الراحة تُعطي الجسم فرصة لبناء خلايا سليمة جديدة.`, {
  })
})
bot.command('Can_a_dose_of_chemotherapy_be_missed', ctx => {
  console.log(ctx.from)
  bot.telegram.sendMessage(ctx.chat.id, `لا يُنصح بتفويت جلسة العلاج الكيميائي. لكن في بعض الأحيان، يُمكن للطبيب تغيير الجدول الزمني الخاص بالعلاج الكيميائي بسبب الآثار الجانبية التي يواجهها المريض. إذا حدث هذا، فإن الطبيب سيقوم بشرح ما يجب القيام به، ومتى سيبدأ العلاج مرة أخرى؟.`, {
  })
})
bot.command('End', ctx => {
  console.log(ctx.from)
  bot.telegram.sendMessage(ctx.chat.id, `
  Done,
Thank God...And my success is only with God..🙏🏻
Thank's for using our personal assistant..☺️
We hope that the personal assistant was able to help you answer common questions about cancer..🤝
With my wishes for a speedy recovery, Ahmed Ayman Al-Saee..🤍
  `, {
  })
})
app.use(bot.webhookCallback('/secret-path'))
bot.telegram.setWebhook('https://eb96-62-114-104-174.eu.ngrok.io/secret-path')*/



























const TelegramBot = require("node-telegram-bot-api");
const { Configuration, OpenAIApi } = require("openai");

//require("dotenv").config();

const configuration = new Configuration({
    apiKey: "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",
});
const openai = new OpenAIApi(configuration)

// replace the value below with the Telegram token you receive from @BotFather
const token = "6092800778:AAHQOuA7PlHhsRwXT8FwDqdmos4O7WZ8k9E"

const bot = new TelegramBot(token, { polling: true });

bot.on("message", async (msg) => {
    const chatId = msg.chat.id;
    const userInput = msg.text;

    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: userInput,
        temperature: 0,
        max_tokens: 3000,
        top_p: 1,
        frequency_penalty: 0.5,
        presence_penalty: 0,
    });
    const generatedText = response.data.choices[0].text;

    bot.sendMessage(chatId, generatedText);
});

