import * as THREE from 'three';
import { TrackballControls } from 'three/addons/controls/TrackballControls.js';

const json_string = '{"atoms": [{"adp_display_type": "UAni", "Cartn_xyz": [0.014298041999999622, -0.1860096663636357, 0.959184434848483], "ellipsoid_values": [0.13115459454897943, 0.11848912732087144, 0.10804896591560309], "ellipsoid_rotation": [0.5804481388877862, 0.7432307029050642, 0.3326981820223093, 0.7649195532991474, -0.6377752987157691, 0.09022607898298939, 0.27924547452436616, 0.20211578515112572, -0.9387071824325229], "atom_color": "#3050f8", "ring_color": "#ffffff"}, {"adp_display_type": "constant", "Cartn_xyz": [-0.7645801680000002, 0.21688307363636428, 1.1711425348484834], "size": 0.15, "atom_color": "#ffffff", "ring_color": "#000000"}, {"adp_display_type": "UAni", "Cartn_xyz": [0.9024646620000003, 0.8669140136363649, 0.36418583484848455], "ellipsoid_values": [0.10994421683486556, 0.15159733660949656, 0.13358366935174015], "ellipsoid_rotation": [0.755327575856704, 0.6541025766289794, -0.04037415507184304, 0.6553299052821742, -0.7543231804878128, 0.03923333559114361, -0.004792535163384322, -0.05609241148390975, -0.9984140789174737], "atom_color": "#000000", "ring_color": "#ffffff"}, {"adp_display_type": "constant", "Cartn_xyz": [1.795632332999999, 0.48245126963636453, 0.17837735484848416], "size": 0.15, "atom_color": "#ffffff", "ring_color": "#000000"}, {"adp_display_type": "constant", "Cartn_xyz": [1.0146919199999993, 1.6101198866363644, 1.008668394848483], "size": 0.15, "atom_color": "#ffffff", "ring_color": "#000000"}, {"adp_display_type": "UAni", "Cartn_xyz": [0.298247532, 1.394142173636364, -0.9200149651515162], "ellipsoid_values": [0.14896499746870023, 0.12348640789186549, 0.1321903044671354], "ellipsoid_rotation": [-0.9380238010643739, 0.29849067664750634, 0.1761098083334872, 0.3305209644412935, 0.9233246372905556, 0.19551855727030465, -0.1042460584460687, 0.24160904396726968, -0.9647579122099393], "atom_color": "#000000", "ring_color": "#ffffff"}, {"adp_display_type": "constant", "Cartn_xyz": [-0.5697145080000001, 1.8262125476363646, -0.719805245151516], "size": 0.15, "atom_color": "#ffffff", "ring_color": "#000000"}, {"adp_display_type": "constant", "Cartn_xyz": [0.8985656790000003, 2.0802380486363647, -1.306249725151515], "size": 0.15, "atom_color": "#ffffff", "ring_color": "#000000"}, {"adp_display_type": "UAni", "Cartn_xyz": [0.08985649199999912, 0.3161215136363644, -1.9088820651515164], "ellipsoid_values": [0.1369286558253785, 0.11245294983025028, 0.11693646688835022], "ellipsoid_rotation": [0.6748587309153152, -0.5888202176138043, -0.4448105716331416, -0.5364498672900635, -0.8053636871121116, 0.2522119572218124, -0.5067417815730627, 0.06841113074943782, -0.8593792434063912], "atom_color": "#3050f8", "ring_color": "#ffffff"}, {"adp_display_type": "UAni", "Cartn_xyz": [-0.8170118880000006, -0.6832555563636358, -1.3144248651515156], "ellipsoid_values": [0.14660630986855158, 0.11765967873490046, 0.13023666882535895], "ellipsoid_rotation": [-0.6327536543506274, 0.7696593879111057, -0.08513072010871794, 0.7715167498104599, 0.6172133998483672, -0.1543033499620924, -0.06621720069461566, -0.1633157850543596, -0.9843491436905135], "atom_color": "#000000", "ring_color": "#ffffff"}, {"adp_display_type": "constant", "Cartn_xyz": [-0.9823554840000006, -1.407906906363636, -1.968517275151516], "size": 0.15, "atom_color": "#ffffff", "ring_color": "#000000"}, {"adp_display_type": "constant", "Cartn_xyz": [-1.6852160490000005, -0.2562428943636359, -1.104469945151516], "size": 0.15, "atom_color": "#ffffff", "ring_color": "#000000"}, {"adp_display_type": "UAni", "Cartn_xyz": [0.5503873319999992, -0.7547148963636354, 2.2436559348484852], "ellipsoid_values": [0.10378036364286936, 0.15360159957801664, 0.1449530431871937], "ellipsoid_rotation": [0.34835260488999553, -0.49119432364960364, 0.7983599433092589, -0.9288309411578817, -0.2955384968101626, 0.2234503963991862, 0.1261885312305313, -0.8193809451760506, -0.559188091135964], "atom_color": "#000000", "ring_color": "#ffffff"}, {"adp_display_type": "constant", "Cartn_xyz": [1.4452331519999997, -1.1454614643636354, 2.082237524848484], "size": 0.15, "atom_color": "#ffffff", "ring_color": "#000000"}, {"adp_display_type": "constant", "Cartn_xyz": [-0.04801054500000035, -1.4787052953636353, 2.5573972348484855], "size": 0.15, "atom_color": "#ffffff", "ring_color": "#000000"}, {"adp_display_type": "UAni", "Cartn_xyz": [-0.22465033800000045, -1.272555636363636, -0.04727816515151595], "ellipsoid_values": [0.15254987422319635, 0.11389280870963436, 0.1303022793304768], "ellipsoid_rotation": [-0.9438555320872563, 0.29828095627154894, -0.14200424526757074, 0.26471318580201564, 0.9400342464135503, 0.2150872958411444, 0.1976452979729838, 0.16542093789916323, -0.9662154260276179], "atom_color": "#000000", "ring_color": "#ffffff"}, {"adp_display_type": "constant", "Cartn_xyz": [-0.8458159380000008, -1.9450876473636356, 0.32972572484848506], "size": 0.15, "atom_color": "#ffffff", "ring_color": "#000000"}, {"adp_display_type": "constant", "Cartn_xyz": [0.6300451409999996, -1.7254890723636358, -0.25799104515151683], "size": 0.15, "atom_color": "#ffffff", "ring_color": "#000000"}, {"adp_display_type": "UAni", "Cartn_xyz": [0.6527460719999998, 0.31813310363636527, 3.319147034848484], "ellipsoid_values": [0.10809488253298627, 0.13747486906938688, 0.14150242663832593], "ellipsoid_rotation": [-0.19227995225280906, 0.4337045829984982, -0.8803003775119925, 0.7552906668723205, 0.6381302785730427, 0.14941805815849862, 0.6265496217357583, -0.6361525620905655, -0.4502726832136141], "atom_color": "#000000", "ring_color": "#ffffff"}, {"adp_display_type": "constant", "Cartn_xyz": [-0.1251887009999999, 0.9270318176363652, 3.2543414548484844], "size": 0.15, "atom_color": "#ffffff", "ring_color": "#000000"}, {"adp_display_type": "constant", "Cartn_xyz": [1.473870222, 0.8524209866363655, 3.175946734848484], "size": 0.15, "atom_color": "#ffffff", "ring_color": "#000000"}, {"adp_display_type": "UAni", "Cartn_xyz": [-0.5327284379999999, -1.1812677663636348, 5.080591934848483], "ellipsoid_values": [0.11580139169421982, 0.15543482286328544, 0.1871712946024067], "ellipsoid_rotation": [0.8972225511349814, 0.25135441612786136, -0.3630601206795617, 0.4384756029045075, -0.409826691130867, 0.7998632563721464, 0.052257433847872604, -0.8768483567469046, -0.47791852849401883], "atom_color": "#ff0d0d", "ring_color": "#ffffff"}, {"adp_display_type": "UAni", "Cartn_xyz": [1.8888155220000002, -1.2963115563636347, 4.941722834848484], "ellipsoid_values": [0.1184674780907137, 0.1403858616979942, 0.15472480883858894], "ellipsoid_rotation": [0.8710112235259841, -0.3238931318747302, 0.36936795694286595, -0.45841570990556973, -0.8061813663530616, 0.3740676963557313, 0.17661960650941544, -0.4951412360826844, -0.8506707182729231], "atom_color": "#ff0d0d", "ring_color": "#ffffff"}, {"adp_display_type": "UAni", "Cartn_xyz": [0.8386783020000004, 0.6854877536363655, 5.873742934848483], "ellipsoid_values": [0.21536518351984135, 0.1607246801054485, 0.11800260561727556], "ellipsoid_rotation": [-0.9388024711670432, -0.25070879364357185, 0.2362096969229624, -0.3313793084323449, 0.8445117247167091, -0.42069906198957735, -0.09400890422483299, -0.47322832502481704, -0.8759094007491028], "atom_color": "#ff0d0d", "ring_color": "#ffffff"}, {"adp_display_type": "UAni", "Cartn_xyz": [-0.46743925800000063, 0.9118395236363641, -3.138130765151516], "ellipsoid_values": [0.1193090560651399, 0.1456050115013335, 0.13565223833959328], "ellipsoid_rotation": [-0.34183992680040814, 0.5968297599775775, -0.7259061248193177, 0.8937034358135078, -0.032388582021630204, -0.44748759599541926, -0.2905849845746033, -0.8017139248882575, -0.5223170965802699], "atom_color": "#000000", "ring_color": "#ffffff"}, {"adp_display_type": "constant", "Cartn_xyz": [0.09142610399999995, 1.6876618916363633, -3.3950250651515157], "size": 0.15, "atom_color": "#ffffff", "ring_color": "#000000"}, {"adp_display_type": "constant", "Cartn_xyz": [-1.3766787540000003, 1.2504667526363642, -2.9413318651515166], "size": 0.15, "atom_color": "#ffffff", "ring_color": "#000000"}, {"adp_display_type": "UAni", "Cartn_xyz": [-0.5496769080000008, -0.04184571636363632, -4.323526065151516], "ellipsoid_values": [0.16541887557944937, 0.13388075961219637, 0.12561479931796207], "ellipsoid_rotation": [-0.2769198198014705, 0.951930457279279, 0.1309344030619282, 0.9521956083792344, 0.290145986941316, -0.09559722613731449, -0.12899200279250012, 0.09820239694585879, -0.9867711753236752], "atom_color": "#000000", "ring_color": "#ffffff"}, {"adp_display_type": "constant", "Cartn_xyz": [-0.6567194370000005, 0.48998036363636377, -5.151705645151516], "size": 0.15, "atom_color": "#ffffff", "ring_color": "#000000"}, {"adp_display_type": "constant", "Cartn_xyz": [0.30560300099999926, -0.5356431663636365, -4.393150105151516], "size": 0.15, "atom_color": "#ffffff", "ring_color": "#000000"}, {"adp_display_type": "UAni", "Cartn_xyz": [-1.6168460880000008, -0.9852814263636362, -4.245293765151516], "ellipsoid_values": [0.1632079276374571, 0.12336795548305024, 0.14134765621056006], "ellipsoid_rotation": [-0.3294275561424538, -0.28175130461081593, 0.9011624091161999, -0.9441733999138584, 0.1020956852179398, -0.31323004637962865, -0.003751819440600677, -0.9540401843790345, -0.29965521927859456], "atom_color": "#ff0d0d", "ring_color": "#ffffff"}, {"adp_display_type": "constant", "Cartn_xyz": [-2.3258431680000005, -0.5992477263636362, -4.348430465151515], "size": 0.15, "atom_color": "#ffffff", "ring_color": "#000000"}, {"adp_display_type": "UAni", "Cartn_xyz": [0.6979141620000004, -0.4210783263636353, 4.944159134848485], "ellipsoid_values": [0.1138055859655509, 0.1238097120160317, 0.13192415932476081], "ellipsoid_rotation": [-0.32213198156855566, 0.11061067719774823, -0.9402107553844357, 0.9087741196079987, -0.24214239290942485, -0.3398479970322095, -0.26525569924399606, -0.9639151101865523, -0.022518311939963138], "atom_color": "#ffff30", "ring_color": "#000000"}], "bonds": [{"centre": [-0.5085580830000007, 0.4349969036363639, -3.730828415151516], "length": 1.523627443088852, "rotation": [0.9922118953268614, -0.05397490729970029, -0.11225980649309102, 0.05397490729970029, -0.6259307315091363, 0.7780086302441804, -0.11225980649309102, -0.7780086302441804, -0.6181426268359977]}, {"centre": [1.0633081469999999, 0.5852770451363654, 3.247546884848484], "length": 0.9900579465637022, "rotation": [0.5532407740934042, 0.829369788758286, 0.07791276773139892, -0.829369788758286, 0.539653143388636, 0.14463830172468234, 0.07791276773139892, -0.14463830172468234, 0.9864123692952318]}, {"centre": [0.9978102419999995, -0.9500881803636354, 2.1629467298484846], "length": 0.9896907724446966, "rotation": [-0.3508606142124795, 0.9041670842192316, 0.24367747784507007, -0.9041670842192316, -0.3948168244862913, 0.16309984339984468, 0.24367747784507007, -0.16309984339984468, 0.956043789726188]}, {"centre": [0.5984066055000001, 1.7371901111363643, -1.1131323451515156], "length": 0.9900942970958814, "rotation": [0.782848369469678, 0.6063242145327347, 0.13971176503762645, -0.6063242145327347, 0.6929601321939125, 0.39009896444499537, 0.13971176503762645, -0.39009896444499537, 0.9101117627242346]}, {"centre": [0.6753301170000001, -0.05147261136363501, 4.131653084848485], "length": 1.7858157855006511, "rotation": [0.9989084484340147, 0.02529269276636943, -0.03927074406954088, -0.02529269276636943, -0.4139348727913523, -0.909955054263579, -0.03927074406954088, 0.909955054263579, -0.41284332122536704]}, {"centre": [0.45838135199999996, 0.3404521736363646, 0.6616851348484838], "length": 1.5005037670025783, "rotation": [0.7941133052196434, 0.5919122894134491, 0.1379271551017523, -0.5919122894134491, 0.7017134532779826, 0.39653255998721937, 0.1379271551017523, -0.39653255998721937, 0.9076001480583393]}, {"centre": [-0.3635776980000007, -0.18356702136363567, -1.611653465151516], "length": 1.4746335644211581, "rotation": [-0.1734817613356805, -0.6149788000763262, 0.7692237346445778, 0.6149788000763262, -0.67771214090891, -0.40312197846476167, 0.7692237346445778, 0.40312197846476167, 0.49576962042677064]}, {"centre": [1.2933648420000003, -0.858694941363635, 4.942940984848485], "length": 1.4779327426184763, "rotation": [0.5922026944340957, -0.8057886029983079, 0.0008342559752813527, 0.8057886029983079, 0.592200987745447, -0.0016484511979108993, 0.0008342559752813527, 0.0016484511979108993, 0.9999982933113515]}, {"centre": [-1.2511139685000006, -0.46974922536363584, -1.2094474051515158], "length": 0.9900501740408141, "rotation": [0.4627240347801276, -0.8769294564703636, 0.12992765683791835, 0.8769294564703636, 0.4313040623559312, -0.21206492913695932, 0.12992765683791835, 0.21206492913695932, 0.9685800275758036]}, {"centre": [0.6003560970000001, 1.1305280936363644, -0.2779145651515158], "length": 1.5140077832042553, "rotation": [0.8818687627588366, -0.39908456000221576, -0.2510756842827211, 0.39908456000221576, 0.3482334541795882, 0.8482128125405738, -0.2510756842827211, -0.8482128125405738, 0.46636469142075165]}, {"centre": [-0.6031981725000006, 0.22406732363636372, -4.737615855151516], "length": 0.99003964522228, "rotation": [0.9923952699811702, -0.1081194369503929, -0.0588371946351144, 0.1081194369503929, 0.5371765490063749, 0.8365115316306952, -0.0588371946351144, -0.8365115316306952, 0.5447812790252048]}, {"centre": [-0.18879138300000076, 0.6139805186363643, -2.523506415151516], "length": 1.4753002632881587, "rotation": [0.8983500635581682, -0.37775072903321755, -0.22421317985325465, 0.37775072903321755, 0.4037944171935952, 0.8332193320837902, -0.22421317985325465, -0.8332193320837902, 0.5054443536354271]}, {"centre": [0.2026974014999996, -1.4990223543636358, -0.1526346051515164], "length": 0.9899762507594313, "rotation": [-0.374007574597359, 0.8633494776711517, 0.33874180956703703, -0.8633494776711517, -0.457519496707669, 0.21284639892962953, 0.33874180956703703, -0.21284639892962953, 0.9164880778896899]}, {"centre": [-0.9220590060000005, 1.0811531381363642, -3.039731315151516], "length": 0.9900074082287271, "rotation": [0.3714894522529656, -0.9184168607654831, 0.13603696823461944, 0.9184168607654831, 0.34204514651648454, -0.1987852801547235, 0.13603696823461944, 0.1987852801547235, 0.970555694263519]}, {"centre": [0.26377868549999994, 0.6225824606363652, 3.2867442448484843], "length": 0.9900201604778315, "rotation": [0.6176897857566017, -0.78577669834979, -0.03184821662929782, 0.78577669834979, 0.6150366813804238, 0.06545884880639351, -0.03184821662929782, -0.06545884880639351, 0.9973468956238221]}, {"centre": [-0.13573348800000007, 1.6101773606363643, -0.8199101051515161], "length": 0.990013556953611, "rotation": [0.464899825069223, -0.8767173276604636, 0.12342965620344633, 0.8767173276604636, 0.4364287448037908, -0.2022292710981344, 0.12342965620344633, 0.2022292710981344, 0.9715289197345678]}, {"centre": [0.6015667019999995, -0.21829089636363508, 2.7814014848484847], "length": 1.5225509019200627, "rotation": [0.997348608100859, 0.06722845185071824, -0.027858377214668648, -0.06722845185071824, 0.7046385107040103, -0.7063744789377587, -0.027858377214668648, 0.7063744789377587, 0.7072899026031512]}, {"centre": [-0.3751410630000003, 0.01543670363636429, 1.0651634848484832], "length": 0.9021640993262376, "rotation": [0.4847427153861552, -0.8633442747075489, 0.14021826988575017, 0.8633442747075489, 0.44658476246271817, -0.2349440641212578, 0.14021826988575017, 0.2349440641212578, 0.961842047076563]}, {"centre": [-0.8996836860000006, -1.045581231363636, -1.6414710701515158], "length": 0.9900984620807382, "rotation": [0.8959796365958603, -0.16699712435925085, -0.4115002445458458, 0.16699712435925085, -0.731898268458181, 0.6606336996276055, -0.4115002445458458, -0.6606336996276055, -0.6278779050540415]}, {"centre": [0.9585782909999998, 1.2385169501363646, 0.6864271148484837], "length": 0.9901048920412631, "rotation": [0.9926609632299229, 0.1133488571787825, -0.04214556507754505, -0.1133488571787825, 0.7506334722453083, -0.6509235184883212, -0.04214556507754505, 0.6509235184883212, 0.7579725090153855]}, {"centre": [-1.0832614980000008, -0.5135635713636363, -4.284409915151516], "length": 1.4265487339759433, "rotation": [-0.6524608930016575, -0.7480776187895705, 0.12113900845559905, 0.7480776187895705, -0.6613413811461906, -0.05484025756481445, 0.12113900845559905, 0.05484025756481445, 0.991119511855467]}, {"centre": [-0.5352331380000006, -1.6088216418636359, 0.14122377984848455], "length": 0.9900898653749552, "rotation": [-0.22720557410131104, -0.6273830504918457, 0.7448275874676231, 0.6273830504918457, -0.6792636047691554, -0.3807774457495598, 0.7448275874676231, 0.3807774457495598, 0.5479419693321559]}, {"centre": [-0.18800657700000034, 1.2997507076363637, -3.2665779151515157], "length": 0.9900633923668766, "rotation": [0.8213558581740877, 0.5644743218552496, 0.08211756334161283, -0.5644743218552496, 0.7836087809946127, 0.2594725771911032, 0.08211756334161283, -0.2594725771911032, 0.962252922820525]}, {"centre": [0.25118839349999944, -1.1167100958636353, 2.4005265848484854], "length": 0.9902907251751759, "rotation": [-0.35783087042618145, -0.6042648505004901, 0.7119136595259719, 0.6042648505004901, -0.7310887405028765, -0.3168173668843576, 0.7119136595259719, 0.3168173668843576, 0.6267421299233049]}, {"centre": [0.19405201199999955, 0.8551318436363642, -1.4144485151515163], "length": 1.4776378143515165, "rotation": [0.9264562171831205, -0.14102985046539052, -0.348983465110386, 0.14102985046539052, -0.7295567625095636, 0.6692215713456002, -0.348983465110386, -0.6692215713456002, -0.6560129796926841]}, {"centre": [0.08259286200000027, -0.8011730463636351, 5.012375534848484], "length": 1.4529222630747016, "rotation": [0.5290029620596728, 0.8470120055808706, 0.05221617119211058, -0.8470120055808706, 0.5232141177266236, 0.09390233976542987, 0.05221617119211058, -0.09390233976542987, 0.9942111556669508]}, {"centre": [-0.5208311130000005, -0.9779055963636358, -0.6808515151515158], "length": 1.517836469955607, "rotation": [0.7510284005452597, 0.39026704241552795, -0.5325861218419661, -0.39026704241552795, -0.3882500464738705, -0.8348374314902715, -0.5325861218419661, 0.8348374314902715, -0.13927844701913017]}, {"centre": [1.3490484974999997, 0.6746826416363647, 0.27128159484848435], "length": 0.9899923642551403, "rotation": [-0.33075698072815163, 0.9021965251944227, 0.27684156051197695, -0.9021965251944227, -0.3883492013489076, 0.18768678093775068, 0.27684156051197695, -0.18768678093775068, 0.9424077793792442]}, {"centre": [0.2823426869999994, -0.47036228136363556, 1.6014201848484841], "length": 1.5035572485922548, "rotation": [0.7955385562567243, 0.35654730839276483, -0.48989021462654414, -0.35654730839276483, -0.37823982461091155, -0.8542883892200464, -0.48989021462654414, 0.8542883892200464, -0.17377838086763586]}, {"centre": [0.7682962320000004, 0.1322047136363651, 5.408951034848484], "length": 1.4520430688305854, "rotation": [0.9605010601855603, -0.09694212452896832, -0.26084466234566644, 0.09694212452896832, -0.7620752467701821, 0.6401902395007096, -0.26084466234566644, -0.6401902395007096, -0.7225763069557425]}, {"centre": [-0.10517614800000041, -0.7292826513636358, 0.45595313484848354], "length": 1.500215130715133, "rotation": [0.9079971047433537, -0.15927607654916565, -0.38752082423631296, 0.15927607654916565, -0.7242601062702638, 0.6708788489023113, -0.38752082423631296, -0.6708788489023113, -0.6322572110136175]}, {"centre": [-0.12203695350000077, -0.2887444413636364, -4.358338085151516], "length": 0.9900440148354379, "rotation": [-0.48889655325073833, 0.8638806923570586, 0.12120358737362946, -0.8638806923570586, -0.4987631283060461, 0.07032418655808205, 0.12120358737362946, -0.07032418655808205, 0.9901334249446925]}, {"centre": [-1.9713446280000007, -0.7922645763636362, -4.296862115151516], "length": 0.8138403134959006, "rotation": [0.48522903073446955, -0.8711746865358138, -0.07488293044288415, 0.8711746865358138, 0.47433592757499166, 0.12672842361048625, -0.07488293044288415, -0.12672842361048625, 0.9891068968405221]}]}';
const structure_obj = JSON.parse(json_string);


//////////////////////////////////////////////////////////////////////////////////
//		Init
//////////////////////////////////////////////////////////////////////////////////

// init renderer
var renderer	= new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
    precision: 'mediump',
});
renderer.setClearColor(new THREE.Color('lightgrey'), 0)
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.domElement.style.position = 'absolute'
renderer.domElement.style.top = '0px'
renderer.domElement.style.left = '0px'
document.body.appendChild( renderer.domElement );

// array of functions for the rendering loop
var onRenderFcts= [];

// init scene and camera
var scene	= new THREE.Scene();

//////////////////////////////////////////////////////////////////////////////////
//		Initialize a basic camera
//////////////////////////////////////////////////////////////////////////////////

// Create a camera
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
scene.add(camera);

const controls = new TrackballControls( camera, renderer.domElement );
camera.position.set( 0, 0, 3.0844419128204215 );
controls.update();

const hemisphere_light = new THREE.HemisphereLight( 0xffffff, 0x080808, 1 );
camera.add(hemisphere_light);

const sphere_geom = new THREE.SphereGeometry(1, 36, 18);
const marker_geom = new THREE.CylinderGeometry(1, 1, 0.2, 36, 1, true);

const bond_mat = new THREE.MeshPhysicalMaterial({color: "#444444"})

const bond_geom = new THREE.CylinderGeometry(0.04, 0.04, 1.0, 36, 1);


const m_ring1 = new THREE.Matrix4();
m_ring1.set(
    1.0, 0.0, 0.0, 0.0,
    0.0, 0.0, -1.0, 0.0,
    0.0, 1.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 1.0
);

const m_ring2 = new THREE.Matrix4();
m_ring2.set(
    0.0, -1.0, 0.0, 0.0,
    1.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 1.0, 0.0,
    0.0, 0.0, 0.0, 1.0
);

const ring_add = 0.006;


////////////////////////////////////////////////////////////////////////////////
//          Entries for iam_uncut
////////////////////////////////////////////////////////////////////////////////
var structureRoot = new THREE.Group
scene.add(structureRoot)

for (let atom_index in structure_obj.atoms) {
    var atom_obj = structure_obj.atoms[atom_index];
    // console.log(atom_obj);
    var mat = new THREE.MeshPhysicalMaterial({color:atom_obj.atom_color});
    var ellip_mesh = new THREE.Mesh(sphere_geom, mat);
    ellip_mesh.position.x = atom_obj.Cartn_xyz[0];
    ellip_mesh.position.y = atom_obj.Cartn_xyz[1];
    ellip_mesh.position.z = atom_obj.Cartn_xyz[2];
    if (atom_obj.adp_display_type == 'UAni') {
        ellip_mesh.scale.x = atom_obj.ellipsoid_values[0];
        ellip_mesh.scale.y = atom_obj.ellipsoid_values[1];
        ellip_mesh.scale.z = atom_obj.ellipsoid_values[2];
        var m = new THREE.Matrix4();
        m.set(
            atom_obj.ellipsoid_rotation[0],
            atom_obj.ellipsoid_rotation[1],
            atom_obj.ellipsoid_rotation[2],
            0.0,
            atom_obj.ellipsoid_rotation[3],
            atom_obj.ellipsoid_rotation[4],
            atom_obj.ellipsoid_rotation[5],
            0.0,
            atom_obj.ellipsoid_rotation[6],
            atom_obj.ellipsoid_rotation[7],
            atom_obj.ellipsoid_rotation[8],
            0.0, 
            0.0, 0.0, 0.0, 1.0
        );
        ellip_mesh.setRotationFromMatrix(m);
        structureRoot.add(ellip_mesh);

        var mat = new THREE.MeshPhysicalMaterial({color: atom_obj.ring_color});
        var ring_mesh = new THREE.Mesh(marker_geom, mat);
        ring_mesh.position.copy(ellip_mesh.position);
        ring_mesh.scale.x = atom_obj.ellipsoid_values[0] + ring_add;
        ring_mesh.scale.y = atom_obj.ellipsoid_values[1] + ring_add;
        ring_mesh.scale.z = atom_obj.ellipsoid_values[2] + ring_add;
        ring_mesh.setRotationFromMatrix(m)
        structureRoot.add(ring_mesh)

        var mat = new THREE.MeshPhysicalMaterial({color: atom_obj.ring_color});
        var ring_mesh = new THREE.Mesh(marker_geom, mat);
        ring_mesh.position.copy(ellip_mesh.position);
        ring_mesh.scale.x = atom_obj.ellipsoid_values[0] + ring_add;
        ring_mesh.scale.y = atom_obj.ellipsoid_values[2] + ring_add;
        ring_mesh.scale.z = atom_obj.ellipsoid_values[1] + ring_add;
        var m1 = m.clone();
        m1.multiply(m_ring1);
        ring_mesh.setRotationFromMatrix(m1)
        structureRoot.add(ring_mesh)

        var mat = new THREE.MeshPhysicalMaterial({color: atom_obj.ring_color});
        var ring_mesh = new THREE.Mesh(marker_geom, mat);
        ring_mesh.position.copy(ellip_mesh.position);
        ring_mesh.scale.x = atom_obj.ellipsoid_values[1] + ring_add;
        ring_mesh.scale.y = atom_obj.ellipsoid_values[0] + ring_add;
        ring_mesh.scale.z = atom_obj.ellipsoid_values[2] + ring_add;
        var m2 = m.clone();
        m2.multiply(m_ring2);
        ring_mesh.setRotationFromMatrix(m2)
        structureRoot.add(ring_mesh)
    } else if (atom_obj.adp_display_type == 'constant') {
        ellip_mesh.scale.x = atom_obj.size;
        ellip_mesh.scale.y = atom_obj.size;
        ellip_mesh.scale.z = atom_obj.size;
        structureRoot.add(ellip_mesh);
    }
}

for (let bond_index in structure_obj.bonds){
    var bond_obj = structure_obj.bonds[bond_index];
    var bond_mesh = new THREE.Mesh(bond_geom, bond_mat);
    bond_mesh.scale.y = bond_obj.length;
    var m = new THREE.Matrix4();
    m.set(
        bond_obj.rotation[0],
        bond_obj.rotation[1],
        bond_obj.rotation[2],
        0.0,
        bond_obj.rotation[3],
        bond_obj.rotation[4],
        bond_obj.rotation[5],
        0.0,
        bond_obj.rotation[6],
        bond_obj.rotation[7],
        bond_obj.rotation[8],
        0.0, 
        0.0, 0.0, 0.0, 1.0
    );
    bond_mesh.setRotationFromMatrix(m);
    bond_mesh.position.x = bond_obj.centre[0];
    bond_mesh.position.y = bond_obj.centre[1];
    bond_mesh.position.z = bond_obj.centre[2];
    structureRoot.add(bond_mesh);
}

//////////////////////////////////////////////////////////////////////////////////
//		render the whole thing on the page
//////////////////////////////////////////////////////////////////////////////////

// render the scene
onRenderFcts.push(function(){{
    renderer.render( scene, camera );
}})

// run the rendering loop
var lastTimeMsec= null
requestAnimationFrame(function animate(nowMsec){{
    // keep looping
    requestAnimationFrame( animate );
    // measure time
    lastTimeMsec	= lastTimeMsec || nowMsec-1000/60
    var deltaMsec	= Math.min(200, nowMsec - lastTimeMsec)
    lastTimeMsec	= nowMsec
    controls.update();
    onRenderFcts.forEach(function(onRenderFct){{
        onRenderFct(deltaMsec/1000, nowMsec/1000)
    }})
}})