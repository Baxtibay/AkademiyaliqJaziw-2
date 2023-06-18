const form = document.querySelector('.form');


const answersDB = () => [
  {
    quostion: "Sozlerdi duris aytiw qagiydalarinin jiynagi ne dep ataladi ?",
    a: "orfoepiya",
    b: "Orfografiya",
    c: "leksikografiya ",
    d: "frazeologiya "
  },
  {
    quostion: "Ilimiy stil janrlarin korsetin ?",
    a: "ilimiy maqala, referat, tezis, dissertatsiya",
    b: "referat, drama, komediya, qissa, tezis ",
    c: "maqala, ocherk, qosiq, gurrin, tezis ",
    d: "maqala, gazzel, qissa, konspekt "
  },
  {
    quostion: "Ilimiy stilde sozler..?",
    a: "terminologiyaliq manide qollaniladi",
    b: "korkemlew qurallari xizmetinde qollaniladi ",
    c: "awispali manide kobirek qollaniladi ",
    d: "seslik ozgerislerge kobirek ushirap qollaniladi "
  },
  {
    quostion: "Publicistik stilge tan  ozgeshelik",
    a: "saltanatliliq, koterinkilik",
    b: "korkemlilik, ilimiylik",
    c: "logikaliliq, izbe-izlik ",
    d: "ilimiylik, apiwayiliq "
  },
  {
    quostion: "Korkem stilge tan ozgeshelik qaysi juwapta berilgen?",
    a: "Obrazliliq, estetik  tasir etiw waziypasi",
    b: "Suwretlew qurallarin qollanbaw",
    c: "Korkemlilik, atamalardi qollaniw",
    d: "Apiwayiliq, saltanatliliq"
  },
  {
    quostion: "Referattin tiykargi boliminde neler sawlelenedi?",
    a: "Mashqala boyinsha adebiyatlardi analiz etiw tiykarinda avtordin kozqaraslari",
    b: "Diagramma, anketa ham basqa korinistegi qosimshalar",
    c: "Jumistin maqseti ham waziypalari, temalardi tanlaw tiykarlari jane onin aktualligi",
    d: "Juwmaqlar ham usinislar qaliplestiriledi"
  },
  {
    quostion: "Qaysi tushinik leksikaliq birlik esaplanbaydi?",
    a: "gap",
    b: "leksema ",
    c: "frazema",
    d: "soz  "
  },
  {
    quostion: "Maqalanin qanday turleri bar?",
    a: "ilimiy, publicistikaliq, ilimiy- publicistikaliq",
    b: "publicistikaliq, korkem, rasmiy ",
    c: "ilimiy, rasmiy, esse",
    d: "ilimiy-publicistikaliq, feleton, intervyu  "
  },
  {
    quostion: "Sin pikir beriwshinin waziypasi neden ibarat?",
    a: "Avtordin kemshiliklerin tawip, oni saplastiriwga jardem beriw, oqiwshiga shigarmani isenimli etip tusindiriw",
    b: "Sin pikirinde shigarma tuwrali aytpaqshi bolgan pikirinde ozinin aniq poziciyasin bilip aliw",
    c: "Shigarmani qayta korip shigiw",
    d: "Shigarmani dodalaw"
  },
  {
    quostion: "Hazirgi harekettegi alipbedegi ozgerisler qashan qabil etildi?",
    a: "2016-jil 10-iyunda",
    b: "2015-jil 10-iyunda",
    c: "2014-jil 10-iyunda ",
    d: "2009-jil 10-iyunda"
  },
  {
    quostion: "	Adebiy tildin soz bayligin ham onin bir neshe manilik ozgeshelikleri qaysi sozlik turinde uyreniledi?",
    a: "Tusindirme sozlik",
    b: "Enciklopediyaliq sozlikler ",
    c: "Orfografiyaliq sozlik ",
    d: "Filologiyaliq sozlikler "
  },
  {
    quostion: "Sozlerdin ham ondagi dawisli ham dawissiz seslerdin, tubir ham qosimtalardin, manili ham komekshi sozlerdin, qospa sozlerdin bir qiyli duris jaziliw qadelerinin jiynagi…?",
    a: "Imla",
    b: "Punktuaciya",
    c: "Buwin",
    d: "Orfoepiya"
  },
  {
    quostion: "Korkem oner tarawina tiyisli terminler berilgen qatardi aniqlan ?",
    a: "kifara, balet, soprano, cirk",
    b: "aliw, balet, soprano, cirk",
    c: "balet, soprano, cirk, utir, alim ",
    d: "morfologiya, utir, grammatika  "
  },
  {
    quostion: "Qarim-qatnas madeniyati degenimiz ne?",
    a: "Sawatli soylew, oz sozin korkem ham tusinikli, tasirshen bayan etiw, oz pikir ham tuygilarin sozde    aniq anlata aliw",
    b: "Aniq ima-ishara, manili qaraw, qollap-quwatlawshi yaki jagimli kulimsirew",
    c: "Qatanliq darejesi, qollap-quwatlaw keypiyatin saqlaw, ozinin psixologiyaliq halatin sholkemlestiriw ",
    d: "Bul qanday da bir qol menen uslap bolmaytugin, aqil parasat penen amelge asirilatugin is-hareket"
  },
  {
    quostion: "Qarim-qatnas texnikasinin quram bolekleri qaysilar?",
    a: "Mimikaliq pantomimo, qarim-qatnas madeniyati, psixologiyaliq halat",
    b: "Aniq ima-ishara, soylew	tempi, mimikaliq pantomima",
    c: "Mimikaliq pantomimo, qarim-qatnas madeniyati, soylew tempi",
    d: "Mimikaliq pantomim, qarim-qatnas madeniyati, aniq ima-ishara "
  },
  {
    quostion: "	Àsirese, berilgeni, demek, esaplanadi, dàlillew, ataladi usagan sozleri qaysi stilde qollanadi?",
    a: "ilimiy stil",
    b: "korkem adebiy stil",
    c: "publicistikaliq stil",
    d: "soylesiw stil"
  },
  {
    quostion: "Adebiy tildin normalari tiykarinda sheber, tasirli soylep ham jaza biliw adisinin jiyindigi de dep ataladi??",
    a: "Stil",
    b: "Imla ",
    c: "Olshem",
    d: "Alipbe "
  },
  {
    quostion: "Awizeki soylew texnikasina neler kiredi?",
    a: "Dawis, buwin, sozlerdin, onin formalarin aytiliwin jaqsilaw barisinda soylew organlarin aktivlestiriwshi shinigiwlar",
    b: "Qarim-qatnastagi irgaqtin tezligi, joqari-pasligi de tasirshenlikti asiwshi faktorlar",
    c: "Aniq ima-ishara, soylew	tempi, mimikaliq pantomimo ",
    d: "Mimikaliq pantomimo, qarim-qatnas madeniyati, soylew tempi "
  },
  {
    quostion: "Qarim-qatnas procesindegi tiykargi qurallardan birin atan",
    a: "Dawis texnikasi  ",
    b: "aniq ima-ishara ",
    c: "qarim-qatnas madeniyati ",
    d: "Mimikaliq pantomimo "
  },
  {
    quostion: "Maqala qaysi stilde jaziladi?",
    a: "publicistikaliq, ilimiy",
    b: "publicistik,    ilimiy-publicistik",
    c: "ilimiy, rasmiy",
    d: "publicistikaliq, rasmiy"
  },
  {
    quostion: "Jazba qarim-qatnas  turlerine neler kiredi?",
    a: "malimlemeler, esletpeler, esabatlar, biznes xatlari",
    b: "jamiyetlik-siyasiy atamalar",
    c: "terminler, esabatlar, biznes xatlari",
    d: "korkem suwretlew qurallari, esabatlar, biznes xatlari"
  },
  {
    quostion: "Gap degenimiz ne?",
    a: "Semantikaliq, intonatsiyaliq putinlikke iye bolgan, tamamlangan bir putin oydi bildiretugin sintaksislik birlik",
    b: "Sintaksistin tiykargi birligi",
    c: "Gap pikirdi adamlardin sezimin basqalarga jetkeriwde xizmet qilatugin tiykargi birlik",
    d: "Adamlar arasinda oz ara pikir alisiwdin en ahmiyetli qurali "
  },
  {
    quostion: "Gaptin grammatikaliq kategoriyalarina neler kiredi?",
    a: "bet, mahal, modalliq tastiyiqlaw ham biykarlaw kategoriyalari",
    b: "modalliq ham waqitliq mani kategoriyalari",
    c: "modalliq tastiyiqlaw ham biykarlaw kategoriyalari",
    d: "feyildin morfologiyaliq bet kategoriyasi"
  },
  {
    quostion: "Gaptin kim, ne haqqinda ekenligin bildirip, is-harekettin  iyesin  korsetetugin  bas agza ne dep ataladi ?",
    a: "baslawish",
    b: "bayanlawish",
    c: "toliqlawish",
    d: "aniqlawish "
  },
  {
    quostion: "Jamiyetlik-siyasiy qatnaslardi xabarlaytugin kopshilikke tusinikli jazba adebiy til qaysi stilde qollaniladi?",
    a: "publicistikaliq stil",
    b: "soylesiw stil",
    c: "ilimiy stil",
    d: "rasmiy stil"
  },
  {
    quostion: "Til birlikleri ham materialinan pikirdi jetkerip beriw maqsetinde paydalaniw  procesi ne dep ataladi?",
    a: "stil ",
    b: "sawbet",
    c: "polilog",
    d: "dialog"
  },
  {
    quostion: "Аnlаtiliw mаqsеti ham mаzmuninа qаrаy tekstler qanday turlеrgе bolinеdi?",
    a: "suwrеtlеw, tusindirmе, хаbаr, didакtiкаliq",
    b: "monolog, dialog, buyriq, didакtiкаliq tekst ",
    c: "erkin, turgin, didакtiкаliq, suwrеtlеw tekst ",
    d: "minimal tekst, maksimal, tusindirmе tekst"
  },
  {
    quostion: "Oz-ozin qorgaw ushin shigip  soylegen soz awizeki stildin qaysi turine kiredi?",
    a: "sud stili",
    b: "diniy stil    ",
    c: "akademik stil",
    d: "siyosiy- socialliq stil"
  },
  {
    quostion: "Adebiyattaniw terminleri qaysi juwapta duris berilgen?",
    a: "lirika, oda, simvol, novella, aruz",
    b: "aruz, kletka, klimat, uyqas, peyzaj",
    c: "uyqas, aliw, peyzaj, utir, komediya",
    d: "komediya, fonetika, hawa, intermediya "
  },
  {
    quostion: "Yubiley yaki maqtaw sozi awizeki stildin qaysi turine kiredi?",
    a: "socialliq-turmisliq stil",
    b: "sud stili",
    c: "akademik stil",
    d: "diniy stil    "
  },
  {
    quostion: "Tекst  degenimiz ne?",
    a: "Maniliк  ham duzilisi jаginan bаylаnisqаn bir tutаs sintакsisliк birliк",
    b: "Har bir tаmаmlаngаn piкir dibildirеdi",
    c: "Wаqiyalаrdi sawlеlеndiriw zarurligi tiyкаrindа juzеgе shigаdi ",
    d: "Аdаmlаr bir-biri mеnеn piкir аlisqаndа, soylеsкеndе yamаsа jаzgаndа zarurliкке qаrаy pаydаlаnаdi"
  },
  {
    quostion: "Kishi mаzmundi qаmtiytugin bir gaptеn yamаsа bir nеshе gaptеn qurаlаtugin putinliк ne dep ataladi?",
    a: "minimal tekst",
    b: "makro tekst",
    c: "maksimal tekst",
    d: "monolog tekst."
  },
  {
    quostion: "Ilimiy stilde bir manili sozlerdin qollaniliwi qaysi ozgeshelikke kiredi?",
    a: "Leksikaliq ozgeshelikleri",
    b: "Fonetikaliq ozgeshelikleri",
    c: "Sintaksislik ozgeshelikleri",
    d: "Morfologiyaliq ozgeshelikleri"
  },
  {
    quostion: "Qaysi stilde  sozlerdin   orin  tartibi  erkin, pikirler  qisqa  jay  gapler  arqali bildiriledi?",
    a: "awizeki soylew stili",
    b: "adebiy soylew stili",
    c: "publicistikaliq stil ",
    d: "rasmiy stil"
  },
  {
    quostion: "Ilimiy stilde atliqlardin qollaniliwi qaysi ozgeshelikke kiredi?",
    a: "Morfologiyaliq ozgeshelikleri",
    b: "Sintaksislik ozgeshelikleri   ",
    c: "Leksikaliq ozgeshelikleri        ",
    d: "Fonetikaliq ozgeshelikleri"
  },
  {
    quostion: "Ilimiy stilge tan ozgeshelik?",
    a: "Soz va atamalardi qollaniw  ",
    b: "Neologizmlerdi qollaniw    ",
    c: "Gonergen sozlerdi qollaniw  ",
    d: "Awispali manili sozlerdi qollaniw "
  },
  {
    quostion: "Terminler qaysi stilge tan: rubayi, tuyiq, gazzel, muxammes?",
    a: "ilimiy stil",
    b: "soylesiw stil    ",
    c: "rasmiy stil ",
    d: "publicistikaliq stil"
  },
  {
    quostion: "Referattin tiykargi boliminde neler sawlelenedi?",
    a: "Mashqala boyinsha adebiyatlardi analiz etiw tiykarinda avtordin kozqaraslari            ",
    b: "Diagramma, anketa ham basqa korinistegi qosimshalar    ",
    c: "Jumistin maqseti ham waziypalari, temalardi tanlaw tiykarlari jane onin aktualligi    ",
    d: "Juwmaqlar ham usinislar qaliplestiriledi           "
  },
  {
    quostion: "Publicistikaliq stildin tiykarin qaysi leksika quraydi?",
    a: "jamiyetlik-siyasiy atamalar",
    b: "terminler",
    c: "korkem suwretlew qurallari",
    d: "qalipke tusirilgen sozler"
  },
  {
    quostion: "Lekciya qaysi stilge tan?",
    a: "ilimiy stil",
    b: "soylesiw stil",
    c: "rasmiy stil",
    d: "publicistikaliq stil"
  },
  {
    quostion: "Til stillerinde  tiykargi itibar nelerge qaratiladi?",
    a: "stillik ozgesheliklerge ",
    b: "terminlerge",
    c: "irkilis belgilerine",
    d: "stillik biytarep sozlerge"
  },
  {
    quostion: "«Stil» sozi qaysi tilden alingan?",
    a: "grek",
    b: "latin",
    c: "arab",
    d: "rus"
  },
  {
    quostion: "Atamalardi uyrenetugin taraw ne dep ataladi?",
    a: "terminologiya",
    b: "fonetika",
    c: "frazeologiya",
    d: "morfologiya"
  },
  {
    quostion: "Gaptin ekinshi darejeli agzalari qaysilar?",
    a: "aniqlawish, toliqlawish, pisiqlawish",
    b: "bayanlawish,  baslawish,  aniqlawish",
    c: "toliqlawish, bayanlawish, baslawish ",
    d: "baslawish,  toliqlawish,  aniqlawish"
  },
  {
    quostion: "Gap agzalarinin orin tartibi qanday turlerge bolinedi?",
    a: "apiwayi, ozgeriwshen",
    b: "apiwayi, turaqli",
    c: "apiwayi, erkin",
    d: "erkin, turaqli "
  },
  {
    quostion: "Silteme degenimiz ne?",
    a: "Magliwmat alingan derekti keltirip otiw",
    b: "Sozler izbe-izligin ozgertiw  ",
    c: "Sozlerdin sinonimlerin qollaniw  ",
    d: "Tiykargi manini saqlagan halda, pikirdi basqa sozler jardeminde sawlelendiriw"
  },
  {
    quostion: "Lingvistikaliq terminler berilgen qatardi aniqlan?",
    a: "morfologiya, utir, grammatika, sinonim  ",
    b: "aliw, qosiw, lirika, klimat",
    c: "uyqas, obraz, soraw belgisi, utir, alimi",
    d: "zona, qurgaqliq, kvadrat, meridian"
  },
  {
    quostion: "Perefrazalaw degenimiz ne?",
    a: "Tiykargi manini saqlagan halda, pikirdi basqa sozler jardeminde sawlelendiriw",
    b: "Sozlerdin sinonimlerin qollaniw  ",
    c: "Sozler izbe-izligin ozgertiw  ",
    d: "Magliwmat alingan derekti keltirip "
  },
  {
    quostion: "Adebiy til degen ne?",
    a: "xaliq tilinin jetilisken korinisi",
    b: "Uliwma xaliqliq soylew tili",
    c: "jazba adebiyat tili  ",
    d: "folklorliq shigarmalar tili  "
  },
  {
    quostion: "Citatalardan paydalaniw degenimiz ne?",
    a: "Qandayda bir shaxstin belgili tema dogeregindegi pikirlerin tikkelley keltiriw",
    b: "Tiykargi manini saqlagan halda, pikirdi basqa sozler jardeminde sawlelendiriw ",
    c: "Sozler izbe-izligin ozgertiw",
    d: "Magliwmat alingan derekti keltirip otiw "
  },
  {
    quostion: "Ilim ham texnikanin, ondiris ham awil xojaliginin har turli tarawina qatnasli qollanilatugin sozler….dep ataladi?",
    a: "atamalar",
    b: "dialektik sozler  ",
    c: "kasiplik sozler",
    d: "ozlestirilgen sozler"
  },
  {
    quostion: "Songi jillari suwdin tam-tarisliginan eginnin de mazasi bolmay atir. Qaysi stilge tan?",
    a: "publicistikaliq stil",
    b: "ilimiy stil",
    c: "Adebiy stil",
    d: "rasmiy is qagazlar stili"
  },
  {
    quostion: "Ilimiy stil janrlari qaysilar?",
    a: "ilimiy maqala, referat, tezis, dissertatsiya",
    b: "maqala, ocherk, reportaj, feleton",
    c: "referat, drama, komediya, ilimiy maqala",
    d: "maqala, referat, tezis, konspekt"
  },
  {
    quostion: "Pikirdi awizeki bayan etiw turleri qaysilar?",
    a: "Sawbet, dodalaw",
    b: "Dodalaw, referat",
    c: "Pikirlesiw, shigarma",
    d: "Sawbet, bayan"
  },
  {
    quostion: "Maqalalar qanday bolimlerden ibarat?",
    a: "Kirisiw, tiykargi bolim, juwmaq",
    b: "Rezyume, tiykargi bolim, juwmaq",
    c: "Annotaciya, Kirisiw, tiykargi bolim ",
    d: "Kirisiw ham juwmaq bolimleri "
  },
  {
    quostion: "Annotaciyanin mazmundi toliq qamrap aliwi boyinsha turlerin aniqlan?",
    a: "qanigelestirilgen, toparli, uliwma",
    b: "erkin, turaqli, qanigelestirilgen ",
    c: "toparli, qanigelestirilgen, turaqli ",
    d: "uliwma, usinisli, erkin "
  },
  {
    quostion: "“Recenziya” sozinen qanday mani anlatadi?",
    a: "Qayta korip shigiw, baha beriw",
    b: "Pikirlesiw, qayta korip shigiw",
    c: "Sawbetlesiw,  xabar  beriw",
    d: "Dodalaw, xabar  beriw"
  },
  {
    quostion: "Metallardin oksidleri onda eriydi, al metall erimeydi.Bul gap stiltin qaysi turine kiredi?",
    a: "ilimiy stil",
    b: "rasmiy is qagazlari",
    c: "korkem adebiy stil",
    d: "publicistikaliq stil"
  },
  {
    quostion: "Ilimiy miynetlerge berilgen sin pikir  baspa sozde berileme?",
    a: "jariyalanbaydi ",
    b: "jariyalanadi ",
    c: "dodalaw mumkin",
    d: "qayta korip shigiladi "
  },
  {
    quostion: "Sin pikirdin tiykarin ne quraydi?",
    a: "Uyrenilip atirgan shigarmanin analizi",
    b: "Sawbetlesiw ham baha beriw  ",
    c: "Juwmaqlar ham usinislar",
    d: "Diagramma, anketa ham basqa korinistegi qosimshalar"
  },
  {
    quostion: "Sin pikir beriwshinin waziypasi neden ibarat?",
    a: "Avtordin kemshiliklerin tawip, oni saplastiriwga jardem beriw, oqiwshiga shigarmani isenimli etip tusindiriw",
    b: "Sin pikirinde shigarma tuwrali aytpaqshi bolgan pikirinde ozinin aniq poziciyasin bilip aliw",
    c: "Shigarmani qayta korip shigiw",
    d: "Shigarmani dodalaw"
  },
  {
    quostion: "Haqi, pitim, pay, girew, daldalshi terminlari qaysi tarawga tiyisli?",
    a: "ekonomikaliq ",
    b: "socialliq-turmisliq        ",
    c: "siyasiy- socialliq",
    d: "diniy    "
  },
  {
    quostion: "Monografiyaliq izertlewlerdin, kitapshalardin, joqari ham orta arnawli oqiw orinlarina arnalgan sabaqliqlar tili qaysi stilge turine kiredi?",
    a: "ilimiy stil ",
    b: "rasmiy is qagazlari  ",
    c: "korkem adebiy stil  ",
    d: "publicistikaliq stil "
  },
  {
    quostion: "Siyasiy- socialliq qatnaslarda xizmet etiwshi stil qaysi?",
    a: "publicistikaliq stil",
    b: "korkem adebiy stil  ",
    c: "rasmiy is qagazlari  ",
    d: "ilimiy stil"
  },
  {
    quostion: "Àsirese, berilgeni, demek, esaplanadi, dàlillew, ataladi usağan sozler qaysi stilde qollanadi?",
    a: "ilimiy stil",
    b: "publicistikaliq stil",
    c: "korkem adebiy stil  ",
    d: "rasmiy is qagazlari  "
  },
  {
    quostion: "Adebiy tildin normalari tiykarinda sheber, tasirli soylep ham jaza biliw adisinin jiyindigi de dep ataladi?",
    a: "Stil",
    b: "Alipbe ",
    c: "Olshem ",
    d: "Imla"
  },
  {
    quostion: "Belgili bir tilde, onin aymaqliq yaki socialliq dialektinde bar bolgan, ol yaki bul jaziwshi-shayirlardin shigarmalarinda ushirasatugin  sozler jiyindisi ne dep ataladi?",
    a: "sozlik",
    b: "tekst",
    c: "shigarma",
    d: "gap"
  },
  {
    quostion: "Ilimiy maqala qanday izertlew turi esaplanadi?",
    a: "ozbetinshe",
    b: "iqtiyarli-majburiy",
    c: "erkin",
    d: "sheklengen "
  },
  {
    quostion: "Qarim-qatnastin  bas principi ne?",
    a: "Aniqliq",
    b: "logikaliliq  ",
    c: "tazaliq  ",
    d: "durisliq "
  },
  {
    quostion: "Stildin ayrim-ayrim turleri ushin isletiletugin sozler qanday leksika dep ataladi?",
    a: "stilge tan",
    b: "aralas leksika",
    c: "stillik biytarep",
    d: "neytral leksika"
  },
  {
    quostion: "Referat sozi qanday mani anlatadi?",
    a: "Esabat beriw",
    b: "Sawbetlesiw",
    c: "Dodalaw",
    d: "Pikirlesiw"
  },
  {
    quostion: "Referattin duzilisinde neler sawlelenedi?",
    a: "Jumistin maqseti ham waziypalari, temalardi tanlaw tiykarlari jane onin aktualligi  ",
    b: "Diagramma, anketa ham basqa korinistegi qosimshalar",
    c: "Juwmaqlar ham usinislar qaliplestiriledi  ",
    d: "Mashqala boyinsha adebiyatlardi analiz etiw tiykarinda avtordin kozqaraslari "
  },
  {
    quostion: "Referat qanday jumis turi?",
    a: "Bul tema boyinsha monografiyalar, jurnallar ham maqalalardagi magliwmatlardi logikaliq jaqtan uyreniw ham talqilaw arqali jazilatugin ilimiy tekst",
    b: "Mashqala boyinsha adebiyatlardi analiz etiw tiykarinda avtordin kozqaraslar",
    c: "Juwmaqlar ham usinislar qaliplestiriledi",
    d: "Bul ilimiy jumis turi bolip, kopshilik jagdaylarda oni jazganda qanigelik penen baylanisli dareklerden paydalaniladi"
  },
  {
    quostion: "Kurs jumisi qanday jumis turi?",
    a: "Bul ilimiy jumis turi bolip, kopshilik jagdaylarda oni jazganda qanigelik penen baylanisli dareklerden paydalaniladi",
    b: "Diagramma, anketa ham basqa korinistegi qosimshalar  ",
    c: "Jumistin maqseti ham waziypalari, temalardi tanlaw tiykarlari jane onin aktualligi  ",
    d: "Bul tema boyinsha monografiyalar, jurnallar ham maqalalardagi magliwmatlardi logikaliq jaqtan uyreniw ham talqilaw arqali jazilatugin ilimiy tekst"
  },
  {
    quostion: "Kurs jumisinin maqseti neden ibarat?",
    a: "Tanlagan kasibi boyinsha bilim aliwdin belgili bir basqishta barliq panlerden algan bilimlerin bekkemlew, oz ara baylanistirip, olardi uliwmalastiriw ",
    b: "Adebiyatlardi uyreniw, uyrenetugin materiallardi tanlaw ham bibliografiyaliq sipatlamani tayarlaw",
    c: "Studentlerdin belgili bir tema, tema yamasa mashqala ham ilimiy ham ilimiy-stilistikaliq adebiyatlardi analiz etiwde ameliy konlikpelerin korsetiw ",
    d: "Mashqala boyinsha adebiyatlardi analiz etiw tiykarinda avtordin kozqaraslarin qaliplestiriw"
  },
  {
    quostion: "Referat jumisinin maqseti neden ibarat?",
    a: "Studentlerdin belgili bir tema, tema yamasa mashqala ham ilimiy ham ilimiy-stilistikaliq adebiyatlardi analiz etiwde ameliy konlikpelerin korsetiw",
    b: "Mashqala boyinsha adebiyatlardi analiz etiw tiykarinda avtordin kozqaraslarin qaliplestiriw",
    c: "Adebiyatlardi uyreniw, uyrenetugin materiallardi tanlaw ham bibliografiyaliq sipatlamani tayarlaw",
    d: "Tanlagan kasibi boyinsha bilim aliwdin belgili bir basqishta barliq panlerden algan bilimlerin bekkemlew, oz ara baylanistirip, olardi uliwmalastiriw"
  },
  {
    quostion: "Stillik biytarep sozler berilgen qatardi tabin?",
    a: "auditoriya, kitap, koshe",
    b: "antonim, qala, student",
    c: "sinus, aniqlawish,  malekula",
    d: "tekst, kitap, oqiwshi "
  },
  {
    quostion: "Maqala tek gana kim tarepinen jaziliwi shart?",
    a: "ushinshi shaxs",
    b: "birinshi shaxs",
    c: "ekinshi shaxs",
    d: "hamme"
  },
  {
    quostion: "Adebiy til olshemleri qalay klassifikaciyalanadi?",
    a: "leksik-semantik olshem, orfografik olshem, jaziw olshemi",
    b: "leksik-semantik olshem, fonetik olshem, soylesiw",
    c: "jargonlar, grammatik, imlali",
    d: "dialektal, soylesiw, argolar, jargonlar"
  },
  {
    quostion: "Askeriy  watansuyiwshilik mazmunindagi bayanat  awizeki stildin qaysi turine kiredi?",
    a: "siyosiy- socialliq stil",
    b: "diniy stil    ",
    c: "akademik stil",
    d: "socialliq -turmisliq stil "
  },
  {
    quostion: "Garezsizlik, el-jurt  qaharmanlari, ulli  danishpanlar  hamde manawiyatimiz tamirlarin belgilewshi aktual temadagi socialliq ahmiyetke iye maqalalar qanday maqalalar esaplanadi?",
    a: "ilimiy-publicistik",
    b: "soylesiw stil",
    c: "ilimiy stil",
    d: "publicistikaliq stil"
  },
  {
    quostion: "Ilimiy-publicistik stil   awizeki stildin qaysi turine kiredi?",
    a: "siyosiy- socialliq stil",
    b: "diniy stil    ",
    c: "socialliq -turmisliq stil ",
    d: "akademik stil"
  },
  {
    quostion: "Ilimiy stilde bayanlaw  qanday formada boladi?",
    a: "monolog turinde",
    b: "Bayan etilmeydi",
    c: "II-bet formada shaxs tilinen",
    d: "dialog turinde"
  },
  {
    quostion: "Intervyu sozi qaysi tilden alingan ham qanday mani anlatadi?",
    a: "ingliz, diydarlasiw",
    b: "latin, ushirasiw",
    c: "rus, sawbetlesiw",
    d: "arab, gurrinlesiw"
  },
  {
    quostion: "Reklama sozi qaysi tilden alingan ham qanday mani anlatadi?",
    a: "latin, xabar beriw",
    b: "rus, sawbetlesiw",
    c: "arab, gurrinlesiw ",
    d: "ingliz, diydarlasiw"
  },
  {
    quostion: "Gazetanin siyasiy liniyasin sawlelendiriwshi maqala turi qalay ataladi?",
    a: "bas maqala",
    b: "reportaj",
    c: "Intervyu",
    d: "ocherk"
  },
  {
    quostion: "Annotaciya degende neni tusinesiz?",
    a: "Korkem, ilimiy, mеtоdikaliq shigarmalаrdin avtori, temasi, deregi, ondа koterilgen tiykargi maseleni korsetiwge qаrаtilgаn qisqа хаbаr",
    b: "Mashqala boyinsha adebiyatlardi analiz etiw tiykarinda avtordin kozqaraslari",
    c: "Bul tema boyinsha monografiyalar, jurnallar ham maqalalardagi magliwmatlardi logikaliq jaqtan uyreniw ham talqilaw arqali jazilatugin ilimiy tekst",
    d: "Bul ilimiy jumis turi bolip, kopshilik jagdaylarda oni jazganda qanigelik penen baylanisli dareklerden paydalaniladi"
  },
  {
    quostion: "Qoljazba, monografiya, maqala yaki kitap)tin qisqasha sipatlamasi ne dep ataladi?",
    a: "Annotaciya",
    b: "Ocherk",
    c: "Bas maqala  ",
    d: "Reportaj"
  },
  {
    quostion: "Qarim-qatnas procesindegi tiykargi qurallardan birin atan",
    a: "Dawis texnikasi",
    b: "Mimikaliq pantomimo",
    c: "qarim-qatnas madeniyati",
    d: "aniq ima-ishara"
  },
  {
    quostion: "Jamiyetlik-siyasiy qatnaslardi xabarlaytugin kopshilikke tusinikli jazba adebiy til qaysi stilde qollaniladi?",
    a: "publicistikaliq stil",
    b: "rasmiy stil",
    c: "ilimiy stil  ",
    d: "soylesiw stil"
  },
  {
    quostion: "Qaysi stilde jazilgan maqalada socialliq omir hadiyseleri analiz etilip, teoriyaliq ham globalliq tarepten uyrenip shigiladi?",
    a: "publicistikaliq stil",
    b: "ilimiy stil",
    c: "rasmiy stil",
    d: "soylesiw stil"
  },
  {
    quostion: "Sessiya, konferensiyadagi  bayanat  awizeki stildin qaysi turine kiredi?",
    a: "siyosiy- socialliq stil ",
    b: "socialliq -turmisliq stil",
    c: "akademik stil",
    d: "diniy stil    "
  },
  {
    quostion: "Oqiw orinlari lekciyalari  awizeki stildin qaysi turine kiredi?",
    a: "akademik stil",
    b: "siyosiy- socialliq stil ",
    c: "socialliq -turmisliq stil ",
    d: "diniy stil    "
  },
  {
    quostion: "Akademiyaliq stilge kiretug’n shigarma turin aniqlan?",
    a: "Ilimiy sholiw ",
    b: "tekst",
    c: "qosiq",
    d: "protokol"
  },
  {
    quostion: "Tusindirme sozlikke qanday sozler kirgiziledi?",
    a: "Adebiy tilimizdegi jiyi ham az qollanatugin barliq sozler",
    b: "Rus sozlerin qaraqalpaq tiline awdariw yamasa qaraqalpaq sozleri",
    c: "Jaziliwi qiyin tubir sozler, tubir sozlerge qosimtalardin qosiliwi menen jaziwda ozgeriske ushiraytugin sozler, birigip, qosilip ham bolek jazilatugin qospa sozler ",
    d: "Har bir sozdin manisi jeterli  darejede tusindirilip, aniqlamalar beriledi, aniqlamadan keyin sol sozdin manisin tusindiretugin misallar    "
  },
  {
    quostion: "Ilimiy magliwmat awizeki stildin qaysi turine kiredi?",
    a: "akademik stil",
    b: "siyosiy- socialliq stil ",
    c: "diniy stil    ",
    d: "socialliq -turmisliq stil "
  },
  {
    quostion: "Rasmiy qarim-qatnas, qagiydalar, buyriqlar, magliwmatnamalar, siyasiy maseleler qanday formada jaziladi?",
    a: "jazba formada",
    b: "monologliq formada ",
    c: "ilimiy formada",
    d: "awizeki formada   "
  }, //TODO akad jaziw zaoch juwap aqiri

  {
    quostion: "Sın pikir beriwshiniǹ wazıypası neden ibarat?",
    a: "Avtordıǹ kemshiliklerin tawıp, onı saplastırıwǵa járdem beriw, oqıwshıǵa shıǵarmanı isenimli etip túsindiriw",
    b: "Shıǵarmanı dodalaw",
    c: "Shıǵarmanı qayta kórip shıǵıw",
    d: "Sın pikirinde shıǵarma tuwralı aytpaqshı bolǵan pikirinde óziniǹ anıq poziciyasın bilip alıw"
  },
  {
    quostion: "Pikirdi awızeki bayan etiw túrleri qaysılar?",
    a: "Sáwbet, dodalaw",
    b: "Pikirlesiw, shıǵarma",
    c: "Sáwbet, bayan",
    d: "Dodalaw, referat"
  },
  {
    quostion: "Ilimiy stilde atlıqlardıǹ qollanılıwı qaysı ozgeshelikke kiredi ?",
    a: "Morfologiyalıq ózgeshelikleri",
    b: "Leksikalıq ózgeshelikleri",
    c: "Fonetikalıq ózgeshelikleri",
    d: "Sintaksislik ózgeshelikleri"
  },
  {
    quostion: "Citatalardan paydalanıw degenimiz ne ?",
    a: "Qandayda bir shaxstıǹ belgili tema dógeregindegi pikirlerin tikkelley keltiriw",
    b: "Maǵlıwmat alınǵan derekti keltirip ótiw",
    c: "Sózler izbe-izligin ózgertiw",
    d: "Tiykarǵı mánini saqlaǵan halda, pikirdi basqa sózler járdeminde sáwlelendiriw"
  },
  {
    quostion: "Maqalanıǹ qanday túrleri bar?",
    a: "ilimiy, publicistikalıq, ilimiy- publicistikalıq",
    b: "ilimiy-publicistikalıq, feleton, intervyu",
    c: "publicistikalıq, kórkem, rásmiy",
    d: "ilimiy, rásmiy, esse"
  },
  {
    quostion: "Jazba qarım-qatnas  túrlerine neler kiredi?",
    a: "málimlemeler, esletpeler, esabatlar, biznes xatları",
    b: "kórkem súwretlew quralları, esabatlar, biznes xatları",
    c: "jámiyetlik-siyasiy atamalar",
    d: "terminler, esabatlar, biznes xatları"
  },
  {
    quostion: "Qarım-qatnas mádeniyatı degenimiz ne?",
    a: "Sawatlı sóylew, óz sózin kórkem hám túsinikli, tásirsheǹ bayan etiw, óz pikir hám tuyǵıların sózde    anıq aǹlata alıw",
    b: "Anıq ima-ishara, mánili qaraw, qollap-quwatlawshı yaki jaǵımlı kúlimsirew",
    c: "Qataǹlıq dárejesi, qollap-quwatlaw keypiyatın saqlaw, óziniǹ psixologiyalıq halatın shólkemlestiriw",
    d: "Bul qanday da bir qol menen uslap bolmaytuǵın, aqıl parasat penen ámelge asırılatuǵın is-háreket"
  },
  {
    quostion: "Qaysı túshinik leksikalıq birlik esaplanbaydı?",
    a: "gáp",
    b: "leksema",
    c: "frazema",
    d: "sóz"
  },
  {
    quostion: "Lingvistikalıq terminler berilgen qatardı anıqlań",
    a: "morfologiya, útir, grammatika, sinonim",
    b: "zona, qurǵaqlıq, kvadrat, meridian",
    c: "uyqas, obraz, soraw belgisi, útir, alımı",
    d: "alıw, qosıw, lirika, klimat"
  },
  {
    quostion: "Ilimiy maqala qanday izertlew túri esaplanadı",
    a: "ózbetinshe",
    b: "sheklengen",
    c: "erkin",
    d: "ıqtıyarlı-májbúriy"
  },
  {
    quostion: "Terminler qaysı stilge tán: rubayı, tuyıq, gázzel, muxammes",
    a: "ilimiy stil",
    b: "publicistikalıq stil",
    c: "rásmiy stil",
    d: "sóylesiw stil"
  },
  {
    quostion: "Ádebiy tildiń sóz baylıǵı hám onıń bir neshe mánilik ózgeshelikleri qaysı sózlik túrinde úyreniledi ?",
    a: "Túsindirme sózlik",
    b: "Filologiyalıq sózlikler",
    c: "Enciklopediyalıq sózlikler",
    d: "Orfografiyalıq sózlik"
  },
  {
    quostion: "Àsirese, berilgeni, demek, esaplanadı, dàlillew, ataladı usaǵan sózleri qaysı stilde qollanadı",
    a: "ilimiy stil",
    b: "kórkem ádebiy stil",
    c: "sóylesiw stil",
    d: "publicistikalıq stil"
  },
  {
    quostion: "Til stillerinde  tiykarǵı itibar nelerge qaratıladı",
    a: "stillik ózgesheliklerge",
    b: "irkilis belgilerine",
    c: "terminlerge",
    d: "stillik biytárep sózlerge"
  },
  {
    quostion: "Ilimiy stil janrları qaysılar ?",
    a: "ilimiy maqala, referat, tezis, dissertaciya",
    b: "maqala, referat, tezis, konspekt",
    c: "maqala, ocherk, reportaj, feleton",
    d: "referat, drama, komediya, ilimiy maqala"
  },
  {
    quostion: "Annotaciyanıǹ mazmundı tolıq qamrap alıwı boyınsha túrlerin anıqlaǹ ?",
    a: "qánigelestirilgen, toparlı, ulıwma",
    b: "erkin, turaqlı, qánigelestirilgen",
    c: "toparlı, qánigelestirilgen, turaqlı",
    d: "ulıwma, usınıslı, erkin"
  },
  {
    quostion: "Awızeki sóylew texnikasına neler kiredi",
    a: "Dawıs, buwın, sózlerdiǹ, onıǹ formalarıǹ aytılıwın jaqsılaw barısında sóylew organların aktivlestiriwshi shınıǵıwlar",
    b: "Qarım-qatnastaǵı ırǵaqtıǹ tezligi, joqarı-pásligi de tásirsheǹlikti asıwshı faktorlar",
    c: "Mimikalıq pantomimo, qarım-qatnas mádeniyatı, sóylew tempi",
    d: "Anıq ima-ishara, sóylew         tempi, mimikalıq pantomimo"
  },
  {
    quostion: "Silteme degenimiz ne?",
    a: "Maǵlıwmat alınǵan derekti keltirip ótiw",
    b: "Tiykarǵı mánini saqlaǵan halda, pikirdi basqa sózler járdeminde sáwlelendiriw",
    c: "Sózlerdiǹ sinonimlerin qollanıw",
    d: "Sózler izbe-izligin ózgertiw"
  },
  {
    quostion: "Referattıǹ tiykarǵı bóliminde neler sáwlelenedi ?",
    a: "Mashqala boyınsha ádebiyatlardı analiz etiw tiykarında avtordıń kózqarasları",
    b: "Diagramma, anketa hám basqa kórinistegi qosımshalar",
    c: "Juwmaqlar hám usınıslar qáliplestiriledi",
    d: "Jumıstıń maqseti hám wazıypaları, temalardı tańlaw tiykarları jáne onıń aktuallıǵı"
  },
  {
    quostion: "Perefrazalaw degenimiz ne ?",
    a: "Tiykarǵı mánini saqlaǵan halda, pikirdi basqa sózler járdeminde sáwlelendiriw",
    b: "Sózler izbe-izligin ózgertiw",
    c: "Maǵlıwmat alınǵan derekti keltirip ótiw",
    d: "Sózlerdiǹ sinonimlerin qollanıw"
  }, // SHEGARALIQ QADAG'ALAW TAMAM

  // sorawg'a juwaplar
  {
    quostion: "Hárekettegi qaraqalpaq álipbesinde neshe hárip bar?",
    a: "34",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Jazba tilde irkilis belgilerinin ámeliy qollanılıwın hám olardın sistemasın qaysi ólshemde úyrenemiz?",
    a: "Punktuaciyalıq",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Hújjetler tiyisliligine qaray qanday hújjetlerge ajratiladi?",
    a: "rásmiy ham jeke",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Shólkem, kárxana, mákeme basshilari tárepinen óz xizmetkerine jumisqa kiriwge, bir jumistan basqasina ótip atirganda, juwapker lawazimga otip atirganda qaysi hújjet túri beriledi?  ",
    a: "Arza",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Jámiyetlik-siyasiy qatnaslardi xabarlaytugin kópshilikke túsinikli jazba ádebiy til qaysi stilde qollanıladı?",
    a: "publicistikaliq stil",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "I.Yusupovtin ádebiy laqabı?",
    a: "Ayaziy",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Sózlik quram qalay rawajlangan?",
    a: "Hámmesi duris",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Sóz hám sóz formalarında pattin duris qoyiliwi qaysi normaga tiykarlanadi ?",
    a: "Akcentologiyalıq",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Jiynalis, keshe, ushrasiw, konferenciya juwmaginda qaralgan maseleler qaysi hújjet túrinde rásmiylestiriledi?",
    a: "Protokol",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Qaysi hújjet túri bir gana nusqada tayarlanadi hám aqsha yamasa qimbat bahalı hújjet siyaqli saqlanadi?",
    a: "Til xat",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "`Gúdi buzar` turaqli sóz dizbeginiń leksikalıq mánisin tabiń?",
    a: "tártipsiz",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Jamiyette ádebiy tildi júzege keltiriwdegi maqset?",
    a: "durıs sóylew,durıs jazıw quralların jaratıw",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Tastıyıqlawshı xat, qosimsha xat, kepillik xatları xizmet xatlarının qaysi túrine kiredi?",
    a: "Juwap talap etpeytuğın xatlar",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "İslemegen basti qiynap terleme, Atlarga urmasin eshektin shani, Alma túsken menen aqmaq gellege, Ashila bermeydi Nyutonniń zani. Qosıqtıń avtorin kórsetin?",
    a: "I.Yusupov",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Jazıwdıń dáslepki túri ne dep ataladı?",
    a: "súwretli jaziw",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Qálemdi kór de qasin kór, Qas etersen dushpandi. Gápte qanday sózler qollanilgan?",
    a: "Omonimler",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Tilde kópshilik tárepinen sanali túrde qabil etilgen, ózine tán imla qádelerine iye bolgan norma qalay ataladi",
    a: "Orfografiyalıq norma",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: ". Kórkem ádebiyat stiline tán bolgan belgilerdi atap korsetin",
    a: "emocionallıq, ekspressivlik",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Házirgi harekettegi álipbedegi ózgerisler qashan qabil etildi?",
    a: "2016-jil 10-iyunda",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Magliwmatnama jumis ornina kórsetiw ushin berildi. Qaysi stilge tán misal keltirilgen?",
    a: "rasmiy stil",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Rásmiy stilde kórkemlew quralları qollanılama?",
    a: "qollanilmaydi",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Anlatılıw maqseti hám mazmunına qaray tekstler qanday túrlerge bólinedi?",
    a: "súwretlew, túsindirme, xabar, didaktikalıq",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Qaraqalpaq tilinin sózlik quramina basqa tillerden kirgen sózler ne dep ataladi?",
    a: "ózlestirme sózler",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Ádebiy tildiń sóz bayligi ham onın bir neshe mánilik ózgeshelikleri qaysi sózliktúrinde úyreniledi?",
    a: "Túsindirme sózlik",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: ".<<Stilistika>> termini til hám ádebiyattaniw ilimlerinde qashannan baslap qollanıla basladı",
    a: "XIX ásirdin ortalarınan",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Rásmiy is qagazları leksikası?",
    a: "Rásmiy qatnasta arnawli túrde qollanilatugin sózler rásmiy is qagazları leksikasi boladı (arza, guwaliq,bayanat, buyriq)",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Reklama sózi qaysi tilden alıngan ham qanday máni anlatadi?",
    a: "latin, xabar beriw",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Bayanlaw monolog túrinde, logikalią jaqtan dálillengen, oylanıp düzilgen gáplerden quralip, bul stilde ádebiy til ólshemlerine saykes bolgan til qurallarınan paydalanadi. Qaysi stil tuwrali jazilgan",
    a: "Ilimiy stil",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Qaraqalpaqstan Respublikasında latin jaziwina tiykarlangan jana álipbe qashan qabil etildi?",
    a: "1994-jıl 26-fevral",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Qaraqalpaq ádebiy tilinin rawajlaniw. barısında 1928-1940-jılları qaysi jaziw harekette boldı?",
    a: "Latın",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Tek qaraqalpaq tiline tán háriplerdin berilgenin juwaplardan tabin?",
    a: "ń, ó, ú, w",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Mákeme administraciyası (direktor, onin orinbasarları hám t.b), bólim baslıqları tárepinen ámeliy máseleler jújesinen qabillanatugin hújjet ne dep ataladi?",
    a: "biylik",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Dialektlik sözler dep nege aytiladi?",
    a: "Belgili bir aymaqlarda qollanilatugin sözlerge aytiladi",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Hújjetler qaysi ózgesheligine kóre shizbaylama, túp nusqa, nusqa, ekinshi nusqa (dublikat), kóshirme túrinde bolip keledi?",
    a: "tayarlanıwına qaray",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Adebiy til degenimiz ne?",
    a: "xalıq tilinin jetilisken kórinisi",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Ádebiy tildegi sózlerdiń, frazeologiyalıq dizbeklerdiń, sóz formalarının hám konstrukciyalardıń stillik qatnasların, olardın stilistikalıq belgilerin stilistikanın qaysi túrinde aniqlaymiz",
    a: "til stilistikası",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Qaysi stilde sózlerdin orin tartibi erkin, pikirler qisqa jay gapler arqalı bildiriledi?",
    a: "awizeki söylew stili",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Xizmet tarawindagı, olarga baylanisli máseleni, onin ayırım táreplerin jazba túrde bayanlawshi hám mákeme (bólim) basligina (ishki) yamasa joqan shólkemlerge (sirtqi) jiberiletugin hújjet túri ne dep ataladi?",
    a: "Túsinik xat",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Telegramma, magliwmatnama, arza, isenim xat, dağazalar qaysi tekst túrine kiredi?",
    a: "mikrotekst",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Ilimiy stildin qaysi ózgesheliginde sóz shaqaplarının qollanılıwı úyreniledi?",
    a: "Morfologiyalıq ozgeshelikleri",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Eki yamasa onnan da artıq máseleni óz ishine alatugin hújjet túri ne dep ataladi",
    a: "`Diydarı` sózinin sinonimleri berilgen qatardı belgileń.",
    b: "jamali, júzi",
    c: "answer",
    d: "answer"
  }, // 42 - soraw saylaw bergen
  {
    quostion: "Qaharman sózi qaysi qatarda duris buwinga bólingen?",
    a: "qa-har-man",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Sóylesiw stilinin qaysi ózgesheliginde frazeologizmlerdiń qollanılıwı úyreniledi?",
    a: "correct",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "M.Qashqariydin «Devonu lugatit at-turk>> kitabı hár tárepleme izertlewdi talap etedi. Berilgen gáp qaysi stilge tán?",
    a: "ilimiy stil",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Yusip Has Hajibtin shigarmasin tabiń?",
    a: "Baxitqa baslawshı bilim",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Aqsha, hújjet, qimbat bahalı buyimlar yaki basqa bir nárseler alinganligin tastıyıqlawshi rasmiy jazba hújjet túri ne dep ataladi?",
    a: "Tilxat",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Eger hújjet belgili bir mákemenin ózinde paydalanılsa qanday hújjet túrine kiredi?",
    a: "ishki",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Buyrıqlar mazmuni boyinsha neshege bólinedi",
    a: "ekige",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: ".«Publicistika» termini qaysi tilden alıngan hám qanday máni anlatadi?",
    a: "latin, 'kópshilik'",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Málim bir shaxstin xizmet hám basqa halatlardı, sonday aq qandayda bir jumisqa tiyisli vakolatın korsetiwshi hújjet ne dep ataladı?",
    a: "guwaliq",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Qaysi qatardagi sózler naduris jazilgan?",
    a: "qiz ketgen, at qulaq",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Rasmiy is qagazları stilinin ózine tán ózgesheligin kórsetin",
    a: "turaqlı",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Qaysi hújjet túri basshi talap etiwi menen jaziladi?",
    a: "Túsinik xat",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Qaraqalpaq tili qanday jollar menen rawajlanadi?",
    a: "ishki mumkinshilikler ham sirtqi tásir arqali",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Nizamlar, jobalar, deklaraciya, shaqiriqlar, kelisimler, ustavlar, kodeksler, húkimetlik xabarlar qaysi stilge tán?",
    a: "rasmiy stil",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Qaysi hújjet túri bir gana nusqada tayarlanadi hám aqsha yamasa qimbat bahalı hújjet siyaqlı saqlanadi?",
    a: "Til xat",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Jasi jigirma jetilerge kelip qalgan, orta boyli, tapaltas bir jigit otir eken. Qaysi stilge tán gáp berilgen?",
    a: "kórkem ádebiy stil",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "«Stil» sózi qaysi tilden alıngan?",
    a: "correct",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "1940-jildan baslap qaysi álipbe hárekette boldı?",
    a: "rus",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Jumis (yamasa oqiw) waqtında Xizmetkerler (yamasa student) tárepinen jiberilgen geypara qáte-kemshilikler (máselen, jumisqa yamasa oqiwga kesh keliw, kelmey qalıw, joba yamasa ayırım tapsırmalardı waqtında orinlay almaw), belgilengen tártip-qağıydalardı saqlay almaw hám basqa jagdaylar, sebepler bayan etiletugin hújjet túri ne dep ataladi?",
    a: "Túsinik xat",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Sózlerdi duris aytiw qagiydalarının jiynaģi ne dep ataladı?",
    a: "orfoepiya",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Anlatılıw maqseti hám mazmunına qaray tekstler qanday túrlerge bólinedi?",
    a: "súwretlew, túsindirme, xabar, didaktikalıq",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Shártnamada qatnasıp atırgan táreplerdin birewinde gana huqiq bolip, hesh qanday májburiyat bolmasa, ekinshi tárepte bolsa tek májburiyat bolsa, bul qaysi shártnama túrine kiredi",
    a: "bir tárepleme",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Publicistik stilge tán ózgeshelik?",
    a: "saltanatlılıq, kóterińkilik",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Qanday hallarda sóylew duris bolmawi múmkin?",
    a: "Ádebiy til normaları buzilsa",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Intervyu sózi qaysi tilden alıngan hám qanday máni anlatadi?",
    a: "inglis, diydarlasıw",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Metallardıń oksidleri onda eriydi, al metall erimeydi. Bul gáp stildiń qaysi túrine kiredi?",
    a: "ilimiy stil",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Gazetanın siyasiy liniyasin sáwlelendiriwshi maqala túri qalay ataladi",
    a: "bas maqala",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Ádebiy tildiǹ normaları tiykarında sheber, tásirli sóylep hám jaza biliw ádisinin jiyındıgı ne dep ataladi?",
    a: "Stil",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Bir mákeme shólkem, kárxana, xojaliq yamasa ayrim shaxs óz atınan is kóriw ushin ekinshi bir shaxsqa isenim bildiriwshi jazba túrdegi hújjet ne dep ataladi?",
    a: "Isenim xat",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Mákeme xizmetine tiyisli waqiya hám hádiyselerdi rásmiy ráwishte sáwlelendiretugin hám tastıyıqlaytuúin, xabar beriwshi qásiyetke iye bolgan har qıyli magliwmatlardı óz ishine alatugin hújjet túri ne dep ataladi?",
    a: "Xizmet magliwmatnaması",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Búgingi kúnnin talabinan kelip shiģip, redakciya tárepinen jazilatugin maqala túri qalay ataladi?",
    a: "bas maqala",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Qaysi qatardagi sózlerdin arasına defis qoyilip jazıladı?",
    a: "kiyim kenshek, baris kelis",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Tekst degenimiz ne?",
    a: "Mánilik hám dúzilisi jağınan baylanısqan bir tutas sintaksislik birlik",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Rásmiy is qagazları leksikası?",
    a: "Rásmiy qatnasta arnawli túrde qollanilatugin sózler rásmiy is qagazları leksikası boladı (arza, guwalıq, bayanat, buyrıq)",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Ilimiy stildiń qaysi ózgesheliginde terminlerdin qollanılıwı úyreniledi?",
    a: "Leksikalıq ózgeshelikleri",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Qaysi hújjet túri bir gana nusqada tayarlanadi hám aqsha yamasa qimbat bahalı hújjet siyaqli saqlanadi?",
    a: "Til xat",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Pikirdi awızeki bayan etiw túrlerin belgileń?",
    a: "Sáwbet, dodalaw",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Mákeme administraciyası (direktor, oniń orinbasarları hám t.b), bólim baslıqları tárepinen ámeliy máseleler jújesinen qabillanatugin hújjet ne dep ataladi ?",
    a: "biylik",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Sóylesiw stilinin qaysi ózgesheliginde tolıq emes gápler, sóz-gáplerdin qollanılıwı úyreniledi?",
    a: "Sintaksislik ózgeshelikleri",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Publicistikalıq stildin tiykarın qaysi leksika quraydı?",
    a: "jámiyetlik-siyasiy atamalar",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Monografiyalıq izertlewlerdiń, kitapshalardin, joqari hám orta arnawli oqiw orınlarına arnalgan sabaqlıqlardıń tili qaysi stil túrine kiredi?",
    a: "ilimiy stil",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Ilimiy stilde sózler...",
    a: "terminologiyalıq mánide qollanıladı",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Avtor qaysi hújjette óziniń jeke ómiri hám xizmeti haqqında xronologiyalıq tártipte erkin bayanlap beredi?",
    a: "Ómirbayan",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Qaysi hújjet túri basshi talap etiwi menen jaziladi?",
    a: "Túsinik xat",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Reportaj sózi qaysi tilden alıngan hám qanday máni anlatadi?",
    a: "inglis xabar beriw",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Àsirese, berilgeni, demek, esaplanadi, dàlillew, ataladi usagan sózleri qaysi stilde qollanadi?",
    a: "Ilimiy stil",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Nizamlar, jobalar, deklaraciya, shaqiriqlar, kelisimler, ustavlar, kodeksler, húkimetlik xabarlar qaysi stilge tán?",
    a: "rásmiy stil",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Stilistikada neni úyrenemiz",
    a: "Ádebiy tildiń stilistikalıq birligi bolatuģin sózlerdiń belgilerin izertleydi hám til birlikleri arasındagi óz ara stilistikalıq qatnastiń principlerin aniqlaydi",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Jiynalis, keshe, ushrasiw, konferenciya juwmaginda qaralgan máseleler qaysi hújjet túrinde rásmiylestiriledi?",
    a: "Protokol",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Kórkem ádebiyat stiline tán bolgan belgilerdi atap kórsetin",
    a: "emocionallıq, ekspressivlik",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Ádebiy tildin normaları tiykarında sheber, tásirli sóylep hám jaza biliw ádisinin jiyindigi ne dep ataladi?",
    a: "Stil",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Sóylesiw stilinin qaysi ózgesheliginde frazeologizmlerdin qollanılıwı úyreniledi?",
    a: "Leksikalıq ózgeshelikleri",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Kún tártibi, qarar, tınlandı, maqullaw, soraniw, málim etiw siyaqlı sózler qaysi stilge tán birlikler?",
    a: "Rásmiy is qagazları",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Ilimiy stildiń qaysi ózgesheliginde sóz shaqaplarının qollanılıwı úyreniledi?",
    a: "Morfologiyalıq ózgeshelikler",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Qaysi stilde sózlerdin orin tartibi erkin, pikirler qisqa jay gápler arqalı bildiriledi?",
    a: "Awızeki sóylew stili",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Táreplerden birinin talabi menen shártnama sud tárepinen qanday halatlarda ózgertiliwi yaki biykar etiliwi múmkin",
    a: "Ekinshi tárep shártnamanı qatan ráwishte buzsa",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Qaraqalpaq tili qanday jollar menen rawajlanadi?",
    a: "Ishki múmkinshilikler hám sirtqi tásir arqali",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Seslerdi jaziwdagi shartli belgiler ne dep ataladi?",
    a: "Hárip",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Jámiyetlik-siyasiy qatnaslardı xabarlaytugin kópshilikke túsinikli jazba ádebiy til qaysi stilde qollanıladı?",
    a: "Publicistikalıq stil",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "'Qabusnama' shigarmasin kim jaratqan?",
    a: "Kaykawis",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "«Stilistika» termini til hám ádebiyattaniw ilimlerinde qashannan baslap qollanıla basladı",
    a: "XIX ásirdin ortalarınan",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Pullarga jazilgan, olardıń mugdarın bildiretugin sózler qaysi tekst túrine kiredi?",
    a: "Numezmatikalıq tekst",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Eki yamasa onnan da artıq máseleni óz ishine alatugin hújjet túri ne dep ataladi",
    a: "Quramali",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Bir mákemenin basqa bir ayıpker mákeme yaki juwapker lawazımdağı adamlardan dawagerlik joli menen aqsha yaki qanday da bir mal-múlkti májburiy túrde óndirip beriwdi sorap, sud mákemelerine yáki mámleketlik hákimiyatqa jazba túrdegi bildiriwi jazilgan rásmiy hújjet ne dep ataladi?",
    a: "Dawagerlik arza",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Eki yaki onnan artıq shaxstin puqaralıq huqıqları hám minnetlerin belgilew, ózgertiw yaki biykarlawga qaratilgan óz ara kelisimi qaysi hújjet túrine kiredi",
    a: "Shártnama",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Magliwmatnama jumis ornina kórsetiw ushin berildi. Qaysi stilge tán misal keltirilgen?",
    a: "Rásmiy stil",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Háriplerdin belgili bir izbe-iz tártipte jaylastirilgan jiynagi ne dep ataladi?",
    a: "Álipbe",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Ilim hám texnikanıń, óndiris hám awil xojaliginiń hár túrli tarawina baylanıslı qollanılatugin sózler....dep ataladi.",
    a: "atamalar",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Hújjetler tiyisliligine qaray qanday hújjetlerge ajiratıladı?",
    a: "rásmiy hám jeke",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Jámiyette ádebiy tildi júzege keltiriwdegi maqset",
    a: "duris sóylew, duris jaziw quralların jaratiw",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Sózlerdiń hám ondagi dawisli hám dawıssız seslerdiń, túbir hám qosimtalardin, mánili hám kómekshi sózlerdiń, qospa sózlerdin bir qıyli duris jaziliw qádelerinin jiynagi",
    a: "Imla",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Mórlerge jazılǵan jazıwlar qaysı tekst túrine kiredi",
    a: "Sfragistlik tekst",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Qaysı qatarda rásmiy is qaǵazları stiline táń sózler tolıq berilgen",
    a: "eskertiw,jaza,sógis,gúwalıq",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Lingvistikalıq terminler berilgen qatardı anıqlań ",
    a: "morfologiya,útir,grammatika,sinonim",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "1940-jıldan baslap qaysı álipbe hárekette boldı?",
    a: "rus",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Bayanlaw monolog túrinde, logikalıq jaqtan dálillengen,oylanıp dúzilgen gáplerden quralıp, bul stilde ádebiy til ólshemlerine sáykes bolǵan til qurallarınan paydalanıladı. Qaysı stil haqqında aytılǵan",
    a: "Ilimiy stil",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Kishi mazmundı qamtıytúǵın bir gápten yamasa bir neshe gápten quralatuǵın pútinlik ne dep ataladı?",
    a: "minimal tekst",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Hújjetler óziniń mazmunı boyınsha neshege bólinedi?",
    a: "eki",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Qaraqalpaq tiliniń milliy jazıwı 1928-jılǵa deyin qaysı álipbe tiykarında júrgiziledi",
    a: "arab",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Tildiń,leksikalıq,morfologiyalıq,sistaksislik elementleriniń ishindegi jámiyetke xizmet etiwi ushın eń qolaylı hám durıs dep tańlap alǵan til qurallarınıń jıyintıǵı ne dep ataladı?",
    a: "Ólshem",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Qaysı qatardaǵı sózler qáte jázilǵan?",
    a: "klup,abat,pedagok",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Qıstırmalı-kórgizbe jazba tekstler qaysı tekst túrine kiredi?",
    a: "Epigrafikalıq tekst",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Rásmiy is qaǵazlar stiliniń ózine tán ózgesheligin kórsetiń?",
    a: "turaqlı",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Ashıq buwınlı sózler qatarın tabıń?",
    a: "Tamara,Madina",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Belgili bir shaxstıń oqıw,miynet hám jámiyetlik iskerligi sonday-aq, onıń ózine tán ózgesheligin hár qıylı páziyletin sáwlelendiriwshi hújjet túri ne dep ataladı",
    a: "Minezleme",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Ádebiy tilge tán belgilerdi atap kórsetiń?",
    a: "tildiń normallıq sıpatı, stillik tarmaqlarınıń bóliniwi, jumsalıw dárejesiniń keńligi",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Tastıyıqlawshı xat,qosımsha xat,kepillik xatları xizmet xatlarınıń qaysı túrine kiredi",
    a: "Juwap talap etpeytuǵın xatlar",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Ilimiy stilge tán ózgeshelik?",
    a: "Sóz hám atamalardı qollanıw",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Eger hújjet belgili bir mákemeniń ózinde paydalanılsa qanday hújjet túrine kiredi?",
    a: "ishki",
    b: "answer",
    c: "answer",
    d: "answer"
  },

  // TODO Mug'allim bergen variant start
  {
    quostion: "Ilimiy stil janrların kórsetiǹ",
    a: "Filosofiyaliq, matematikaliq, biologiyaliq, medicinaliq, ximiyaliq, biologiyaliq, geografiyaliq, lingvistikaliq, ádebiyattaniw, pedagogikaliq",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Orfografiya degenimiz ne?",
    a: "Tildegi dawıslı hám dawıssız ses￾ler imlası, túbir hám qosımtalar, qospa, jup hám qısqarǵan sózler imlası, buwınǵa bóliw, bas háriplerdiń duris jaziliw normasi. Uliwma alǵanda duris jaziw qaǵiydalari jiynaǵi",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Ilim-pán tarawları boyınsha anıq shártli belgiler, formulalar, bayanlaw materialı qaysı stilde isletiledi?",
    a: "Ilimiy stilde",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Sózlik quram qalay rawajlanǵan?",
    a: "eki túrli: Ishki hám sirtqi jollar menen",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Tildiǹ eǹ tiykarǵı deregi ne ?",
    a: "Sóz",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Qaysi túshinik leksikalıq birlik esaplanbaydı?",
    a: "Ses ya hárip",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Ilimiy stilde sózler",
    a: "Ilimiy stilde sózler  hám gápler hárbir qubılıstıń tábiyatın ashıp beretuǵın anıq anıqlama yamasa formalardan ibarat boladı.  Olardaǵı sózler kóp mánilikti bildirmeydi, tuwra mánisinde, yaǵnıy  terminologiyalıq mánide qollanıladı",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Ádebiy janrlar qaysılar?",
    a: "Lirika, epika hám drama",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Maqalanıǹ qanday túrleri bar?",
    a: "Maqalalardı shártli túrde direktivlik, úgit-násiyatlıq, problemalıq, metodikalıq (tájiriybe talqılaytuǵın), kritikalıq (áshkaralaytuǵın) dep bóliwge boladı",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Kórkem stilge tán ózgeshelik qaysı juwapta berilgen?",
    a: "Kórkem ádebiyat stiliniń ádebiy til stilleriniń basqa túrlerine  qaraǵanda ózine tán ózgeshelikleri bar. Kórkem shıǵrmalardaǵı leksikalıq baylıqlar hám grammatikalıq qurallar onıń syujeti  hám obrazlılıǵina ılayıq keń qollaniladi. Turmıstıń  hámme  tárepine — tábiyat kórinislerine, adamlarǵa, haywanat hám janlı maqluqlarǵa, jámiyetlik-siyasiy hám ekonomikaǵa, úrp-ádet t.b.  tarawlarına qatnaslı bolǵan sózler, sóz dizbekleri, onšń tiykarǵı  súwretlew materialı boladı.Kórkem ádebiyat stiliniń ózine tán  ózgesheligi onšń janrlıq túrlerine baylanıslı.",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Terminler qaysı stilge tán: rubayı, tuyıq, gázzel, muxammes",
    a: "Kórkem ádebiyat stili",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Qanday hallarda sóylew durıs bolmawı múmkin?",
    a: "Sóylew durıs bolıwı ushın tiykarınan eki normaǵa (pát hám  grammatikalıq normaǵa) qattı ámel etiw talap etiledi. Sózlerdegi páttiń kúsheyiwi menen mánisiniń de geyde ózgerip keliw múm￾kinshiligin esten shıǵarmaw kerek. Bul da sóylewdiń buzılıwına alıp keledi",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Lekciya qaysı stilge tán?",
    a: "Kitabiy",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Qaraqalpaq ádebiy tiliniń rawajlanıw tariyxı qaysı dáwirden baslanadı?",
    a: "19 ásir",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Sóylewdiǹ qanday formaları bar?",
    a: "1. Radio, televideniede diktor, jıynalıslardaǵı bayanatshılardıń sóylewi.2. Qádimgi óz ara sóylesiw",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Tárbiya sistemasına baylanıslı terminlerdi anıqlaǹ",
    a: "correct",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Til stillerinde  tiykarǵı itibar nelerge qaratıladı?",
    a: "correct",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Atamalardı úyrenetuǵın taraw ne dep ataladı?",
    a: "Terminologiya",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Ádebiy tildiń sóz baylıǵı hám onıń bir neshe mánilik ózgeshelikleri qaysı sózlik túrinde úyreniledi?",
    a: "Terminologiyaliq sózlik",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Qaraqalpaqstan Respublikasında latın jazıwına tiykarlanǵan jańa álipbe qashan qabıl etildi?",
    a: "1994",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Sózlerdiń hám ondaǵı dawıslı hám dawıssız seslerdiń, túbir hám qosımtalardıń, mánili hám kómekshi sózlerdiń, qospa sózlerdiń bir qıylı durıs jazılıw qádeleriniń jıynaǵı…",
    a: "correct",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Haqı, pitim, pay, girew, dáldálshi terminlari qaysı tarawǵa tiyisli?",
    a: "Social-ekonomkialiq\ sawda",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "«Devonu luǵatit at-turk» kitabınıǹ avtorı kim? ",
    a: "M.Qashqariy",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Monografiyalıq izertlewlerdiń, kitapshalardıń, joqarı hám orta arnawlı oqıw orınlarına arnalǵan sabaqlıqlar tili qaysı stilge túrine kiredi?",
    a: "ilmiy stil ",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Ádebiy til degen ne?",
    a: "belgili bir normalarǵa túsip, jetilisken, ulıwma xalıqlıq tildıń eń joqarı túri, yaǵnıy belgili bir normaǵa tiykarlanǵan til",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Siyasiy- sociallıq qatnaslarda xızmet etiwshi stil qaysı?",
    a: "Publicistikaliq stil",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Àsirese, berilgeni, demek, esaplanadı, dàlillew, ataladı usağan sózler qaysı stilde qollanadı?",
    a: "Ilimiy stil",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Ádebiy tildiǹ normaları tiykarında sheber, tásirli sóylep hám jaza biliw ádisiniǹ jıyındıǵı de dep ataladı?",
    a: "Stil",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Belgili bir tilde, onıǹ aymaqlıq yaki sociallıq dialektinde bar bolúan, ol yaki bul jazıwshı-shayırlardıǹ shıǵarmalarında ushırasatuǵın  sózler jıyındısı ne dep ataladı? ",
    a: "Dialektizmler",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Ilimiy maqala qanday izertlew túri esaplanadı?",
    a: "correct",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Pikirdi awızeki bayan etiw túrleri qaysılar?",
    a: "Lekciay, bayanat, konferenciya",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Stillik biytárep sózler berilgen qatardı tabıǹ?",
    a: "Ádebiy tilde samal, gúz, qıs, mektep, gazeta, kitap, jańa, jaqsı, jaman, uzın, qısqa, oqıw, islew, jasaw, barıw, keliw, búgin, erteń,  bir, úsh, on, men, sen, ol, siz, biz t.b. sšyaqlı birqansha sózler  hámme stillerde qollanıla beredi. Bunday hámme stiller ushın ortaq,  keń qollanšlatuǵn sózler ulıwma ádebiy yamasa stillik biytárep sózler dep ataladı",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Maqala tek ǵana kim tárepinen jazılıwı shárt?",
    a: "Jaziwshi",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Ádebiy til ólshemleri qalay klassifikaciyalanadı?",
    a: "correct",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: ". «Publicistika» termini qaysı tilden alınǵan hám qanday máni aǹlatadı? ",
    a: "<<Publicistika>> termini latınnıń publicus — kópshilik degen sózin￾en alınǵan. Publicistikalıq stil — kópshilikke túsinikli jazba ádebiy til stiliniń bir túri. Stildiń bul túrine xalıqtıń kúndelik turmısına baylanıslı shıǵarılıp atırǵan jámi etlik-siyasiy ádebiyatlar, gazeta-jur￾nal maqalaları, ocherkler tiliniń stili kiredi",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Áskeriy  watansúyiwshilik mazmunındaǵı bayanat  awızeki stildiǹ qaysı túrine kiredi?",
    a: "Publicistikaliq",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Ǵárezsizlik, el-jurt  qaharmanları, ullı  danıshpanlar  hámde mánáwiyatımız tamırların belgilewshi aktual temadaǵı sociallıq áhmiyetke iye maqalalar qanday maqalalar esaplanadı? ",
    a: "Baslı maqala yamasa direktivaliq",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Til  haqqında  filosofiyalıq  bahalı  pikirler  qaysı  shıǵarmada berilgen?",
    a: "Aristotel 'Poetika'",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Tildiń leksikalıq, morfologiyalıq, sintaksislik elementleriniń ishindegi jámiyetke xızmet etiwi ushın eń qolaylı hám durıs dep tańlap alǵan til qurallarınıń jıyıntıǵı ne dep ataladı?",
    a: "Ádebiy til",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Ilimiy-publicistik stil   awızeki stildiǹ qaysı túrine kiredi?",
    a: "correct",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Jámiyetlik-siyasiy qatnaslardı xabarlaytuǵın kópshilikke túsinikli jazba ádebiy til qaysı stilde qollanıladı?",
    a: "Publicistikaliq stil",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Ilimiy stilde bayanlaw  qanday formada boladı? ",
    a: "3-bet formasinda keledi.Àsirese, berilgeni, demek, esaplanadı, dàlillew, ataladı usağan sózler qollaniladi",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Gazetanıǹ siyasiy liniyasın sáwlelendiriwshi maqala túri qalay ataladı?",
    a: "bas maqala",
    b: "ocherk",
    c: "Intervyu",
    d: "reportaj"
  },
  {
    quostion: "Sessiya, konferensiyadaǵı  bayanat  awızeki stildiǹ qaysı túrine kiredi?",
    a: "siyosiy- socialliq stil ",
    b: "socialliq -turmisliq stil",
    c: "akademik stil",
    d: "diniy stil    "
  },
  {
    quostion: "Oqıw orınları lekciyaları  awızeki stildiǹ qaysı túrine kiredi?",
    a: "correct",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Qaysı stilde jazılǵan maqalada socialliq ómir hádiyseleri analiz etilip, teoriyalıq hám globallıq tárepten úyrenip shıǵıladı?",
    a: "correct",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Akademiyalıq stilge kiretuǵ’n shıǵarma túrin anıqlaǹ",
    a: "correct",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Túsindirme sózlikke qanday sózler kirgiziledi?",
    a: "correct",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Til biliminde sózliklerdi mazmunı boyınsha neshe toparǵa bólemiz?",
    a: "correct",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Ilimiy maǵlıwmat awızeki stildiǹ qaysı túrine kiredi?",
    a: "correct",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Qarım-qatnas mádeniyatı degenimiz ne?",
    a: "correct",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Qarım-qatnas texnikasınıǹ quram bólekleri qaysılar?",
    a: "correct",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Awızeki sóylew texnikasına neler kiredi?",
    a: "correct",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Qarım-qatnas procesindegi tiykarǵı qurallardan birin ataǹ",
    a: "Gáp",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Maqala qaysı stilde jazıladı?",
    a: "Ilimiy-publicistikaliq stilde",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Jazba qarım-qatnas  túrlerine neler kiredi?",
    a: "Xat",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Gáp degenimiz ne?",
    a: "Tiyanaqli oy-pikirdi bildiretuǵin, struktura-semantikaliq hám intonaciyaliq jaqtan bir pútinlikke iye bolǵan sintaksislik birlik",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Gáptiń grammatikalıq kategoriyalarına neler kiredi?",
    a: "Bet kategoriyasi, máhál, modalliq( meyil)",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Gáptiń kim, ne haqqında ekenligin bildirip, is-hárekettiń  iyesin  kórsetetuǵın  bas aǵza ne dep ataladı?",
    a: "Baslawish",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Baslawıshtıń is-háreketin, hal jaǵdayın, kim? ne? ekenin bildiretuǵın aǵza ne dep ataladı?",
    a: "Bayanlawish",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Silteme degenimiz ne?",
    a: "Qanday da bir obyektke arnalǵan kórsetkish , tildiń sipatlanǵan elementi paydalanilǵan derek",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Perefrazalaw degenimiz ne?",
    a: "Barliq narse hám waqiyalar, qubilislardiń atamasin tuwridan-tuwri atamay, awispali mánide  , obrazli  túrde qayta ataw",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Citatalardan paydalanıw degenimiz ne?",
    a: "Jaziwshiniń shiǵarmasinan yamasa qanday da bir miynetten alinǵan úzindi. Ol obrazliliq hám emocional-ekspressivlimti tamiyinleydi. Pikirdi bayitiwda paydalaniladi",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Ilimiy stil janrları qaysılar?",
    a: "Filosofiyaliq, matematikaliq, biologiyaliq, medicinaliq, ximiyaliq, biologiyaliq, geografiyaliq, lingvistikaliq, ádebiyattaniw, pedagogikaliq",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Qarım-qatnastıǹ  bas principi ne?",
    a: "Predikativlikke iye boliwi",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Maqalalar qanday bólimlerden ibarat?",
    a: "Kirisiw, Tiykarǵi bólim, Juwmaq ",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  // TODO Mug'allim bergen variant END
];

answersDB().forEach((item, index) => {
  console.log(item.a)


  const container = document.createElement('div')
  container.innerHTML = `

      <ul class="test-list">
      <span class="quostion-text"> ${item.quostion}</span>
            <li class="test-item">
              <label>
                <input type="radio" name="${index}"> ${item.a}
              </label>
            </li>
            <li class="test-item">
              <label>
                <input type="radio" name="${index}"> ${item.b}
              </label>
            </li>
            <li class="test-item">
              <label>
                <input type="radio" name="${index}"> ${item.c}
              </label>
            </li>
            <li class="test-item">
              <label>
                <input type="radio" name="${index}"> ${item.d}
              </label>
            </li>
        </ul>
  `
  form.append(container)
})