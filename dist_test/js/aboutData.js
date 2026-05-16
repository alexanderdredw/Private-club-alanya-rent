const aboutData = {
    intro: {
        headline: {
            en: "Alanya: A Lifestyle You Don’t Want to Leave",
            ru: "Алания: Стиль жизни, который не хочется оставлять",        },
        subheadline: {
            en: "Between the Taurus Mountains and the Mediterranean Sea lies a place where time slows down, and life feels infinitely richer.",
            ru: "Между Торосскими горами и Средиземным морем находится место, где время замедляется, а жизнь ощущается бесконечно богаче.",        },
        btn_explore: {
            en: "Explore Apartments",
            ru: "Смотреть Апартаменты",        },
        btn_discover: {
            en: "Discover Alanya",
            ru: "Открыть Аланию",        }
    },
    special: {
        subtitle: { en: "PREMIUM COASTAL LIVING", ru: "ПРЕМИАЛЬНАЯ ЖИЗНЬ НА ПОБЕРЕЖЬЕ" },
        title: { en: "Why Alanya Feels Different", ru: "Почему Алания ощущается иначе" },
        highlight: { en: "300+ sunny days per year. Endless Mediterranean perfection.", ru: "300+ солнечных дней в году. Бесконечное совершенство Средиземноморья." },
        closing: { en: "Not just a location. Your new reality.", ru: "Не просто локация. Ваша новая реальность." },
        features: [
            {
                icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3l4 8 5-5 5 15H2L8 3z"></path></svg>',
                title: { en: "Sea & Mountains", ru: "Море и Горы" },
                desc: { en: "Wake up to stunning panoramas where lush green ridges cascade directly into warm, crystal-clear waters.", ru: "Просыпайтесь с потрясающими панорамами, где зеленые хребты спускаются прямо в теплые, прозрачные воды." }
            },
            {
                icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>',
                title: { en: "Unmatched Climate", ru: "Непревзойденный Климат" },
                desc: { en: "A microclimate that promises luxurious, golden summers and whisper-mild winters. Year-round perfection.", ru: "Микроклимат, обещающий роскошное золотое лето и очень мягкую зиму. Круглогодичное совершенство." }
            },
            {
                icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>',
                title: { en: "Freedom of Movement", ru: "Свобода Движения" },
                desc: { en: "Stroll endlessly. From vibrant bazaars to quiet seaside promenades, the city’s best experiences are always just a step away.", ru: "Гуляйте бесконечно. От ярких базаров до тихих набережных — лучшие впечатления города всегда в шаге от вас." }
            },
            {
                icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>',
                title: { en: "Slow Luxury", ru: "Медленная Роскошь" },
                desc: { en: "A culture that celebrates the art of living. Deep relaxation paired with modern high-end amenities.", ru: "Культура, воспевающая искусство жить. Глубокое расслабление в сочетании с современными удобствами премиум-класса." }
            }
        ]
    },
    lifestyle: {
        title: { en: "The Rhythm of Days", ru: "Ритм Дней" },
        blocks: [
            {
                phase: { en: "Morning", ru: "Утро" },
                img: "assets/images/lifestyle_morning.jpg",
                position: "center bottom", /* Re-framed to explicitly show the breakfast table */
                text: { 
                    en: "Sunlight spills across your private terrace. The day begins with the scent of sea air, rich Turkish coffee, and pure, uninterrupted comfort.",
                    ru: "Утренний свет заливает вашу частную террасу. День начинается с аромата морского воздуха, крепкого кофе и абсолютного комфорта.",                }
            },
            {
                phase: { en: "Day", ru: "День" },
                img: "assets/images/lifestyle_day.jpg",
                position: "center 80%",
                text: { 
                    en: "Effortless movement. Sink your feet into the golden sands of Cleopatra Beach, or wander the ancient, history-draped streets of the city center.",
                    ru: "Легкое движение. Ощутите золотой песок пляжа Клеопатры или прогуляйтесь по древним, пропитанным историей улицам центра города.",                }
            },
            {
                phase: { en: "Evening", ru: "Вечер" },
                img: "assets/images/lifestyle_evening.jpg",
                text: { 
                    en: "As the sky turns violet and gold, the marina awakens. Premium dining, soft breezes, and the gentle clinking of glasses by the water's edge.",
                    ru: "Когда небо становится фиолетово-золотым, марина оживает. Премиальные рестораны, легкий бриз и звон бокалов у самой воды.",                }
            },
            {
                phase: { en: "Night", ru: "Ночь" },
                img: "assets/images/lifestyle_night_v3.jpg",
                text: { 
                    en: "Return to your sanctuary. A profound, luxurious silence descends, leaving only the sound of waves in the distance.",
                    ru: "Возвращение в ваше убежище. Спускается глубокая, роскошная тишина, оставляя лишь шум волн вдалеке.",                }
            }
        ]
    },
    landmarks: {
        title: { en: "Icons of Alanya", ru: "Иконы Алании" },
        items: [
            {
                id: "castle",
                name: { en: "Alanya Castle", ru: "Крепость Алании" },
                subtitle: { en: "A Crown of History Above the Blue", ru: "Корона истории над морем" },
                uniqueTitle: { en: "Where History Meets the Horizon", ru: "Где история встречается с горизонтом" },
                desc: { en: "A breathtaking 13th-century fortress suspended above the sea.", ru: "Захватывающая дух крепость 13 века, возвышающаяся над морем." },
                paragraphs: {
                    en: [
                        "The Alanya Castle is a medieval fortress that dominates the skyline of the city. Most of the castle was built in the 13th century under the Seljuk Sultanate of Rüm following the city's conquest in 1221 by Alaeddin Kayqubad I.",
                        "The castle sits 250 metres high on a rocky peninsula, surrounded by the Mediterranean on three sides. Its 6.5 kilometres of walls include 140 towers and about 400 cisterns, showcasing the strategic importance of this maritime stronghold.",
                        "Today, it is an open-air museum where history and nature intertwine. Visitors can explore the Citadel (Ic Kale), ancient churches, and the remains of Seljuk palaces while enjoying the most iconic panoramic views of Alanya's coastline."
                    ],
                    ru: [
                        "Крепость Алании — это не просто исторический памятник, а место, где время ощущается иначе. Прогуливаясь по древним стенам, вы наблюдаете, как море и город сливаются в единый пейзаж, создавая атмосферу спокойствия и величия.",
                        "Средневековая цитадель, возвышающаяся на 250 метров над уровнем моря, хранит в своих камнях наследие сельджукского султаната. Ее стены протяженностью 6,5 км и 140 башен веками служили защитой, а сегодня открывают путь к самому эстетичному виду на побережье.",
                        "Здесь история раскрывается не в строках учебника, а в каждом панорамном виде на бескрайнее Средиземное море, создавая ощущение вечности и тихой роскоши момента."
                    ]
                },
                unique: {
                    en: "One of the best-preserved Seljuk castles in the world, offering a 360-degree journey through time.",
                    ru: "Один из немногих замков в мире, где история раскрывается через панорамные виды на бескрайнее Средиземное море."
                },
                img: "assets/images/landmark_castle_new.jpg",
                size: "large"
            },
            {
                id: "cleopatra",
                name: { en: "Cleopatra Beach", ru: "Пляж Клеопатры" },
                subtitle: { en: "Where Legends Meet the Tide", ru: "Там, где легенды встречаются с приливом" },
                uniqueTitle: { en: "Where the Sea Becomes Perfection", ru: "Место, где море становится идеальным" },
                desc: { en: "Legendary velvet sands meeting impossibly blue waters.", ru: "Легендарные бархатные пески, встречающиеся с невероятно синей водой." },
                paragraphs: {
                    en: [
                        "Named after the Egyptian Queen who is said to have swum here, Cleopatra Beach is a two-kilometer stretch of coastline known for its coarse, honey-colored sand and transparent turquoise waters.",
                        "According to legend, the beach was a gift from the Roman general Mark Antony to Cleopatra. She was so enchanted by the bay that she refused to step on any other sand, leading to the legend that special grains were brought across the sea from Egypt just for her.",
                        "With its Blue Flag certification, the beach offers a perfect blend of natural beauty and modern amenities. It remains one of the most desirable spots in the Mediterranean for sun-seeking travelers who appreciate both history and luxury."
                    ],
                    ru: [
                        "Названный в честь египетской царицы, которая, как говорят, здесь купалась, пляж Клеопатры представляет собой двухкилометровую береговую линию, известную своим крупным песком медового цвета и прозрачной бирюзовой водой.",
                        "Согласно легенде, пляж был подарком римского полководца Марка Антония Клеопатре. Она была так очарована заливом, что отказалась ступать на любой другой песок, что привело к легенде о том, что специальные песчинки были привезены через море из Египта специально для нее.",
                        "Благодаря сертификации «Голубой флаг» пляж предлагает идеальное сочетание природной красоты и современных удобств. Он остается одним из самых желанных мест в Средиземноморье для любителей солнца, которые ценят и историю, и роскошь."
                    ]
                },
                unique: {
                    en: "Silky, granular sand that never clouds the water, creating a translucent swimming experience like no other.",
                    ru: "Шелковистый зернистый песок, который никогда не замутняет воду, создавая уникальные ощущения от купания."
                },
                img: "assets/images/landmark_cleopatra.jpg",
                size: "tall"
            },
            {
                id: "redtower",
                name: { en: "Red Tower", ru: "Красная Башня" },
                subtitle: { en: "The Octagonal Guardian of the Port", ru: "Восьмиугольный страж порта" },
                uniqueTitle: { en: "A Silhouette You Can't Miss", ru: "Символ, который невозможно пропустить" },
                desc: { en: "The iconic, deeply historic guardian of the city port.", ru: "Знаменитый, исторический страж городского порта." },
                paragraphs: {
                    en: [
                        "Kızıl Kule, or the Red Tower, stands as the symbol of Alanya. This monumental octagonal structure was completed in 1226 by the Seljuk Sultan Ala ad-Din Kay Qubadh I to protect the shipyard and the harbor.",
                        "Rising 33 metres high and built from striking red bricks on its upper levels, the tower is a masterpiece of medieval military architecture. Its inner layout includes five floors connected by a central stone staircase, leading to the top floor with stunning harbor views.",
                        "The Red Tower now houses an Ethnographic Museum on its lower floors, telling the story of Alanya's maritime heritage and the daily life of those who guarded these shores for centuries."
                    ],
                    ru: [
                        "Кызыл Куле, или Красная башня, является символом Алании. Это монументальное восьмиугольное сооружение было достроено в 1226 году сельджукским султаном Ала ад-Дином Кей-Кубадом I для защиты верфи и гавани.",
                        "Башня высотой 33 метра, построенная из эффектного красного кирпича на верхних уровнях, является шедевром средневековой военной архитектуры. Его внутренняя планировка включает пять этажей, соединенных центральной каменной лестницей, ведущей на верхний этаж с потрясающим видом на гавань.",
                        "В Красной башне теперь на нижних этажах располагается Этнографический музей, рассказывающий историю морского наследия Алании и повседневную жизнь тех, кто веками охранял эти берега."
                    ]
                },
                unique: {
                    en: "An architectural marvel where red brick and limestone merge to form a silhouette that defines the Alanya horizon.",
                    ru: "Архитектурное чудо, где красный кирпич и известняк сливаются, образуя силуэт, определяющий горизонт Алании."
                },
                img: "assets/images/landmark_redtower.jpg",
                size: "small"
            },
            {
                id: "marina",
                name: { en: "Alanya Marina", ru: "Марина Алании" },
                subtitle: { en: "Contemporary Elegance on the Coast", ru: "Современная элегантность на побережье" },
                uniqueTitle: { en: "Where Lights Reflect on Still Waters", ru: "Где огни отражаются в воде" },
                desc: { en: "Where luxury yachts rest in the evening light.", ru: "Где роскошные яхты отдыхают в лучах вечернего света." },
                paragraphs: {
                    en: [
                        "Alanya Marina is the premier maritime hub of the city, where contemporary architecture meets the natural beauty of the Mediterranean. It offers a sophisticated environment for yachting enthusiasts and luxury travelers alike.",
                        "The marina is more than just a harbor; it's a lifestyle destination. With its upscale restaurants serving international cuisine, elegant cafes, and a promenade perfect for sunset strolls, it captures the cosmopolitan spirit of modern Alanya.",
                        "As night falls, the marina transforms into a glittering social center. The reflection of lights on the quiet water provides an atmospheric backdrop for those seeking a premium evening experience away from the city's main hustle."
                    ],
                    ru: [
                        "Марина Алании — главный морской узел города, где современная архитектура встречается с природной красотой Средиземноморья. Она предлагает изысканную среду как для любителей яхтинга, так и для любителей роскошных путешествий.",
                        "Марина — это не просто гавань, это стиль жизни. Фешенебельные рестораны с международной кухней, элегантные кафе и набережная, идеально подходящая для прогулок на закате, отражают космополитичный дух современной Алании.",
                        "С наступлением ночи марина превращается в сверкающий светский центр. Отражение огней в тихой воде создает атмосферный фон для тех, кто ищет первоклассный вечерний отдых вдали от городской суеты."
                    ]
                },
                unique: {
                    en: "Breathtaking sunset vistas and world-class services, defining the height of Mediterranean holiday luxury.",
                    ru: "Захватывающие дух виды на закат и услуги мирового класса, определяющие вершину средиземноморской роскоши."
                },
                img: "assets/images/landmark_marina_night.jpg",
                size: "wide"
            },
            {
                id: "cave",
                name: { en: "Damlatas Cave", ru: "Пещера Дамлаташ" },
                subtitle: { en: "Mystical Healing from the Earth", ru: "Мистическое исцеление Земли" },
                uniqueTitle: { en: "The Mystery Within the Stone", ru: "Тайна внутри камня" },
                desc: { en: "Mystical, healing subterranean wonders.", ru: "Мистические, целебные подземные чудеса." },
                paragraphs: {
                    en: [
                        "Discovered by accident in 1948 during the construction of Alanya's harbor, Damlataş Cave is a subterranean wonder known for its therapeutic atmosphere and ancient formations.",
                        "The cave was formed over fifteen thousand years as water dripped from the ceiling, creating a dense forest of spectacular stalactites and stalagmites. The name 'Damlataş' literally translates to 'Dripping Stone'.",
                        "With its constant temperature of 22 degrees Celsius and high humidity, the cave's air is rich in carbon dioxide and radioactive elements, making it a sought-after destination for those seeking natural relief from respiratory conditions."
                    ],
                    ru: [
                        "Пещера Дамлаташ, случайно обнаруженная в 1948 году во время строительства порта Алании, представляет собой подземное чудо, известное своей терапевтической атмосферой и древними образованиями.",
                        "Пещера формировалась более пятнадцати тысяч лет, когда вода капала с потолка, создавая густой лес живописных сталактитов и сталагмитов. Название «Дамлаташ» буквально переводится как «Капающий камень».",
                        "Благодаря постоянной температуре 22 градуса по Цельсию и высокой влажности воздух пещеры богат углекислым газом и радиоактивными элементами, что делает ее востребованным местом для тех, кто ищет естественного облегчения при респираторных заболеваниях."
                    ]
                },
                unique: {
                    en: "A natural sanctuary of timeless stone, where the ancient world’s silence offers modern healing.",
                    ru: "Природное святилище из вечного камня, где тишина древнего мира дарует современное исцеление."
                },
                img: "assets/images/landmark_cave.jpg",
                size: "small"
            },
            {
                id: "dimcay",
                name: { en: "Dimcay River", ru: "Река Димчай" },
                subtitle: { en: "Emerald Serenity in the Mountains", ru: "Изумрудная безмятежность в горах" },
                uniqueTitle: { en: "Emerald Coolness in the Heart of the Mountains", ru: "Изумрудная прохлада в сердце гор" },
                desc: { en: "Cool, emerald mountain waters offering total serenity.", ru: "Прохладные изумрудные горные воды, дарящие абсолюную безмятежность." },
                paragraphs: {
                    en: [
                        "Dimcay River is a refreshing escape from the summer heat, flowing down from the Taurus Mountains through a lush valley. Its cool, emerald waters have created a unique culture of riverside relaxation.",
                        "The valley is lined with numerous restaurants and picnic spots where tables and seating are built directly over the flowing water. It is the ultimate local experience to enjoy a meal while feeling the cold mountain breeze.",
                        "Nearby, the Dim Cave offers another layer of beauty, being the second largest cave in Turkey with impressive stalactites and subterranean lakes, making this region a full-day nature destination."
                    ],
                    ru: [
                        "Река Димчай — это освежающий побег от летней жары, текущий с Таврских гор через пышную долину. Ее прохладные изумрудные воды создали уникальную культуру прибрежного отдыха.",
                        "Долина застроена многочисленными ресторанами и местами для пикников, где столы и сиденья построены прямо над проточной водой. Это незабываемый местный опыт — наслаждаться едой, чувствуя холодный горный ветерок.",
                        "Неподалеку пещера Дим предлагает еще один слой красоты, являясь второй по величине пещерой в Турции с впечатляющими сталактитами и подземными озерами, что делает этот регион местом для однодневной поездки на природу."
                    ]
                },
                unique: {
                    en: "One of the few places where you can dine directly over active mountain torrents in complete tranquility.",
                    ru: "Одно из немногих мест, где можно пообедать прямо над горными потоками в полном спокойствии."
                },
                img: "https://images.unsplash.com/photo-1616788556636-6e114704ed2c?q=80&w=1000",
                size: "medium"
            }
        ]
    },
    nature: {
        title: { en: "Immersed in Nature", ru: "Погружение в природу" },
        text: { en: "Breathe in the deeply restorative air. Let the endless Mediterranean horizon disconnect you from stress.", ru: "Вдохните глубоко восстанавливающий воздух. Позвольте бесконечному горизонту оградить вас от стресса." },
        images: [
            {
                img: "assets/images/nature_rafting.jpg",
                title: { ru: "Рафтинг", en: "Rafting" },
                desc: { ru: "Пройдите по бурным горным рекам и почувствуйте энергию природы в одном из самых ярких приключений Алании.", en: "Navigate wild mountain rivers and feel the raw energy of nature in one of Alanya's most vibrant adventures." }
            },
            {
                img: "assets/images/nature_diving.jpg",
                title: { ru: "Дайвинг", en: "Diving" },
                desc: { ru: "Исследуйте подводный мир Средиземного моря, где кристальная вода и яркая морская жизнь открывают совершенно другую сторону побережья.", en: "Explore the underwater world of the Mediterranean, where crystal waters and vibrant marine life reveal a different side of the coast." }
            },
            {
                img: "assets/images/nature_safari.webp",
                title: { ru: "Сафари", en: "Safari" },
                desc: { ru: "Откройте живописные маршруты за пределами побережья и увидьте дикую, более спокойную и аутентичную сторону региона.", en: "Discover scenic routes beyond the coast and see the wild, calmer, and more authentic side of the region." }
            },
            {
                img: "assets/images/nature_buggy.jpg",
                title: { ru: "Багги-сафари", en: "Buggy Safari" },
                desc: { ru: "Скорость и драйв на бездорожье: преодолевайте пыльные тропы и лесные массивы в захватывающей гонке по горам Алании.", en: "Speed and drive off-road: conquer dusty trails and forest tracts in a thrilling race through the Alanya mountains." }
            },
            {
                img: "assets/images/paragliding-in-alanya.jpg",
                title: { ru: "Параглайдинг", en: "Paragliding" },
                desc: { ru: "Поднимитесь над морем и скалами, чтобы увидеть Аланию с высоты, где природа и горизонт ощущаются по-настоящему безграничными.", en: "Soar above the sea and cliffs to see Alanya from above, where nature and the horizon feel truly limitless." }
            },
            {
                img: "assets/images/nature_sapadere.avif",
                title: { ru: "Каньон Сападере", en: "Sapadere Canyon" },
                desc: { ru: "Прогуляйтесь по деревянным мостикам глубоко в каньоне, любуясь водопадами и вдыхая прохладу нетронутой горной природы.", en: "Stroll along wooden bridges deep in the canyon, admiring waterfalls and breathing in the cool air of untouched mountain nature." }
            }
        ]
    },
    culinary: {
        title: { en: "Social & Warm Atmosphere", ru: "Теплая и социальная атмосфера" },
        cards: [
            {
                title: { en: "Morning Rituals", ru: "Утренние Ритуалы" },
                desc: { en: "Rich Turkish breakfasts shared slowly over endless cups of tea.", ru: "Роскошные турецкие завтраки, растянутые за бесконечными чашками чая." }
            },
            {
                title: { en: "Seaside Dinners", ru: "Ужины у моря" },
                desc: { en: "The catch of the day, delicate meze, and world-class hospitality by the water.", ru: "Свежий улов, нежные мезе и первоклассное гостеприимство у воды." }
            },
            {
                title: { en: "Elevated Evenings", ru: "Изысканные вечера" },
                desc: { en: "Sophisticated lounges where the city's cosmopolitan pulse comes to life.", ru: "Изысканные лаунджи, где оживает космополитичный пульс города." }
            }
        ]
    },
    guests: {
        title: { en: "Designed For You", ru: "Создано Для Вас" },
        items: [
            { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="#D4AF37" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" style="width: 1em; height: 1em; vertical-align: middle; opacity: 0.9;"><rect width="18" height="12" x="3" y="4" rx="2" ry="2"/><line x1="2" x2="22" y1="20" y2="20"/></svg>`, tag: { en: "Remote Workers", ru: "Удаленная работа" }, 
              text: { en: "Transform your workday. Fast Wi-Fi, pure sunshine, and inspiring balcony views that fuel perfection.", ru: "Измените свои будни. Быстрый Wi-Fi, чистое солнце и виды с балкона, вдохновляющие на свершения." } },
            { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="#D4AF37" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" style="width: 1em; height: 1em; vertical-align: middle; opacity: 0.9;"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`, tag: { en: "Families", ru: "Для Семьи" }, 
              text: { en: "Space to grow, spaces to play. Safe, walkable neighborhoods with abundant parks and calm waters.", ru: "Свобода для роста и игр. Безопасные, удобные для прогулок районы с изобилием парков и спокойных вод." } },
            { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="#D4AF37" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" style="width: 1em; height: 1em; vertical-align: middle; opacity: 0.9;"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.51 4.05 3 5.5l7 7Z"/></svg>`, tag: { en: "Couples", ru: "Для Пар" }, 
              text: { en: "Reconnect deeply. Romantic sunsets, intimate dinners, and absolute, luxurious privacy.", ru: "Глубокое воссоединение. Романтические закаты, уединенные ужины и абсолютная роскошная приватность." } },
            { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="#D4AF37" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" style="width: 1em; height: 1em; vertical-align: middle; opacity: 0.9;"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`, tag: { en: "Long Stays", ru: "Долгий отдых" }, 
              text: { en: "Live the lifestyle. Sink into a community that welcomes you with absolute warmth and effortless elegance.", ru: "Живите этим стилем. Станьте частью сообщества, которое встречает вас с теплотой и легкой элегантностью." } }
        ]
    },
    renting: {
        title: { en: "Why Rent Here", ru: "Почему стоит арендовать" },
        comparison: {
            hotel: {
                title: { en: "The Hotel Compromise", ru: "Ограничения отелей" },
                points: { en: "Rigid schedules, cramped single rooms, and shared crowds.", ru: "Жесткие расписания, тесные номера и постоянная толпа." }
            },
            apartment: {
                title: { en: "The Apartment Luxury", ru: "Роскошь апартаментов" },
                points: { en: "Absolute privacy, expansive living spaces, and the true freedom to curate your own perfect, undisturbed lifestyle.", ru: "Абсолютная приватность, огромные пространства и свобода создавать свой идеальный стиль жизни." }
            }
        }
    },
    conversion: {
        title: { en: "Your Life in Alanya Starts with the Right Place", ru: "Ваша жизнь в Алании начинается с правильного места" },
        text: { en: "Browse our curated collection of premium apartments and step into the lifestyle you deserve.", ru: "Ознакомьтесь с нашей коллекцией премиальных апартаментов и шагните в стиль жизни, которого вы заслуживаете." },
        cta: { en: "View Premium Apartments", ru: "Посмотреть Премиум Апартаменты" }
    }
};
