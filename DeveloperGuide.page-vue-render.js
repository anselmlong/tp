
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"sticky":""}},[_c('navbar',{attrs:{"type":"dark"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"/tp/index.html","title":"Home"}},[_v("VBook")])]},proxy:true},{key:"right",fn:function(){return [_c('li',[_c('form',{staticClass:"navbar-form"},[_c('searchbar',{attrs:{"data":searchData,"placeholder":"Search","on-hit":searchCallback,"menu-align-right":""}})],1)])]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/tp/index.html"}},[_v("Home")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/tp/UserGuide.html"}},[_v("User Guide")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/tp/DeveloperGuide.html"}},[_v("Developer Guide")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/tp/AboutUs.html"}},[_v("About Us")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/AY2425S1-CS2103T-F12-4/tp/","target":"_blank"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])])],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_c('div',{attrs:{"id":"content-wrapper"}},[_m(0),_v(" "),_c('div',{pre:true,attrs:{"class":"page-nav-print d-none d-print-block"}}),_v(" "),_c('hr'),_v(" "),_m(1),_v(" "),_m(2),_v(" "),_c('hr'),_v(" "),_m(3),_v(" "),_m(4),_v(" "),_c('hr'),_v(" "),_m(5),_v(" "),_m(6),_v(" "),_c('pic',{attrs:{"src":"/tp/diagrams/ArchitectureDiagram.png","width":"280"}}),_v(" "),_m(7),_v(" "),_c('p',[_v("Given below is a quick overview of the main components and how they interact with each other.")]),_v(" "),_m(8),_v(" "),_m(9),_v(" "),_m(10),_v(" "),_c('p',[_v("The bulk of the app's work is done by the following four components:")]),_v(" "),_m(11),_v(" "),_m(12),_v(" "),_m(13),_v(" "),_m(14),_v(" "),_c('pic',{attrs:{"src":"/tp/diagrams/ArchitectureSequenceDiagram.png","width":"574"}}),_v(" "),_c('p',[_v("Each of the four main components (also shown in the diagram above),")]),_v(" "),_m(15),_v(" "),_m(16),_v(" "),_c('pic',{attrs:{"src":"/tp/diagrams/ComponentManagers.png","width":"300"}}),_v(" "),_c('p',[_v("The sections below give more details of each component.")]),_v(" "),_c('br'),_v(" "),_c('br'),_v(" "),_m(17),_v(" "),_m(18),_v(" "),_c('pic',{attrs:{"src":"/tp/diagrams/UiClassDiagram.png","alt":"Structure of the UI Component"}}),_v(" "),_m(19),_v(" "),_m(20),_v(" "),_m(21),_v(" "),_m(22),_v(" "),_c('br'),_v(" "),_c('br'),_v(" "),_m(23),_v(" "),_m(24),_v(" "),_m(25),_v(" "),_c('pic',{attrs:{"src":"/tp/diagrams/LogicClassDiagram.png","width":"550"}}),_v(" "),_m(26),_v(" "),_c('pic',{attrs:{"src":"/tp/diagrams/DeleteSequenceDiagram-Logic.png","alt":"Interactions Inside the Logic Component for the `:remove -i 1` Command"}}),_v(" "),_c('box',{attrs:{"type":"info","seamless":""}},[_c('p',[_c('strong',[_v("Note:")]),_v(" The lifeline for "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("DeleteCommandParser")]),_v(" should end at the destroy marker (X) but due to a limitation of PlantUML, the lifeline continues till the end of diagram.")])]),_v(" "),_m(27),_v(" "),_m(28),_v(" "),_m(29),_v(" "),_c('pic',{attrs:{"src":"/tp/diagrams/ParserClasses.png","width":"600"}}),_v(" "),_c('p',[_v("How the parsing works:")]),_v(" "),_m(30),_v(" "),_c('br'),_v(" "),_c('br'),_v(" "),_m(31),_v(" "),_m(32),_v(" "),_c('pic',{attrs:{"src":"/tp/diagrams/ModelClassDiagram.png","width":"450"}}),_v(" "),_m(33),_v(" "),_m(34),_v(" "),_c('box',{attrs:{"type":"info","seamless":""}},[_c('p',[_c('strong',[_v("Note:")]),_v(" An alternative (arguably, a more OOP) model is given below. It has a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Tag")]),_v(" list in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("AddressBook")]),_v(", which "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Person")]),_v(" references. This allows "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("AddressBook")]),_v(" to only require one "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Tag")]),_v(" object per unique tag, instead of each "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Person")]),_v(" needing their own "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Tag")]),_v(" objects."),_c('br')]),_v(" "),_c('pic',{attrs:{"src":"/tp/diagrams/BetterModelClassDiagram.png","width":"450"}})],1),_v(" "),_c('br'),_v(" "),_c('br'),_v(" "),_m(35),_v(" "),_m(36),_v(" "),_c('pic',{attrs:{"src":"/tp/diagrams/StorageClassDiagram.png","width":"550"}}),_v(" "),_m(37),_v(" "),_m(38),_v(" "),_c('br'),_v(" "),_c('br'),_v(" "),_m(39),_v(" "),_m(40),_v(" "),_c('hr'),_v(" "),_m(41),_v(" "),_c('p',[_v("This section describes some noteworthy details on how certain features are implemented.")]),_v(" "),_m(42),_v(" "),_m(43),_v(" "),_m(44),_v(" "),_m(45),_v(" "),_m(46),_v(" "),_c('p',[_v("Given below is an example usage scenario and how the undo/redo mechanism behaves at each step.")]),_v(" "),_m(47),_v(" "),_c('pic',{attrs:{"src":"/tp/diagrams/UndoRedoState0.png","alt":"UndoRedoState0"}}),_v(" "),_m(48),_v(" "),_c('pic',{attrs:{"src":"/tp/diagrams/UndoRedoState1.png","alt":"UndoRedoState1"}}),_v(" "),_m(49),_v(" "),_c('pic',{attrs:{"src":"/tp/diagrams/UndoRedoState2.png","alt":"UndoRedoState2"}}),_v(" "),_c('box',{attrs:{"type":"info","seamless":""}},[_c('p',[_c('strong',[_v("Note:")]),_v(" If a command fails its execution, it will not call "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model#commitAddressBook()")]),_v(", so the address book state will not be saved into the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("addressBookStateList")]),_v(".")])]),_v(" "),_m(50),_v(" "),_c('pic',{attrs:{"src":"/tp/diagrams/UndoRedoState3.png","alt":"UndoRedoState3"}}),_v(" "),_c('box',{attrs:{"type":"info","seamless":""}},[_c('p',[_c('strong',[_v("Note:")]),_v(" If the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("currentStatePointer")]),_v(" is at index 0, pointing to the initial AddressBook state, then there are no previous AddressBook states to restore. The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":undo")]),_v(" command uses "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model#canUndoAddressBook()")]),_v(" to check if this is the case. If so, it will return an error to the user rather\nthan attempting to perform the undo.")])]),_v(" "),_m(51),_v(" "),_c('pic',{attrs:{"src":"/tp/diagrams/UndoSequenceDiagram-Logic.png","alt":"UndoSequenceDiagram-Logic"}}),_v(" "),_c('box',{attrs:{"type":"info","seamless":""}},[_c('p',[_c('strong',[_v("Note:")]),_v(" The lifeline for "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("UndoCommand")]),_v(" should end at the destroy marker (X) but due to a limitation of PlantUML, the lifeline reaches the end of diagram.")])]),_v(" "),_m(52),_v(" "),_c('pic',{attrs:{"src":"/tp/diagrams/UndoSequenceDiagram-Model.png","alt":"UndoSequenceDiagram-Model"}}),_v(" "),_m(53),_v(" "),_c('box',{attrs:{"type":"info","seamless":""}},[_c('p',[_c('strong',[_v("Note:")]),_v(" If the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("currentStatePointer")]),_v(" is at index "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("addressBookStateList.size() - 1")]),_v(", pointing to the latest address book state, then there are no undone AddressBook states to restore. The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":redo")]),_v(" command uses "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model#canRedoAddressBook()")]),_v(" to check if this is the case. If so, it will return an error to the user rather than attempting to perform the redo.")])]),_v(" "),_m(54),_v(" "),_c('pic',{attrs:{"src":"/tp/diagrams/UndoRedoState4.png","alt":"UndoRedoState4"}}),_v(" "),_m(55),_v(" "),_c('pic',{attrs:{"src":"/tp/diagrams/UndoRedoState5.png","alt":"UndoRedoState5"}}),_v(" "),_c('p',[_v("The following activity diagram summarizes what happens when a user executes a new command:")]),_v(" "),_c('pic',{attrs:{"src":"/tp/diagrams/CommitActivityDiagram.png","width":"250"}}),_v(" "),_m(56),_v(" "),_m(57),_v(" "),_m(58),_v(" "),_c('br'),_v(" "),_c('br'),_v(" "),_m(59),_v(" "),_m(60),_v(" "),_c('p',[_v("The remove feature allows removal of a person from the address book. The user can remove a person by specifying the index of the person to remove. The user can also remove multiple persons by specifying multiple indexes of the persons to remove.")]),_v(" "),_m(61),_v(" "),_m(62),_v(" "),_c('p',[_v("The following class diagram shows the relationships between the classes involved in the remove feature:")]),_v(" "),_c('pic',{attrs:{"src":"/tp/diagrams/DeleteClassDiagram.png"}}),_v(" "),_m(63),_v(" "),_c('pic',{attrs:{"src":"/tp/diagrams/DeleteMultipleSequenceDiagram-Logic.png","alt":"Interactions Inside the Logic Component for the `:remove -i 1, 2, 3` Command"}}),_v(" "),_m(64),_v(" "),_c('pic',{attrs:{"src":"/tp/diagrams/DeleteSequenceDiagram-Model.png","alt":"DeleteSequenceDiagram-Model"}}),_v(" "),_c('p',[_v("The following activity diagram summarizes what happens when a user executes a new command:")]),_v(" "),_c('pic',{attrs:{"src":"/tp/diagrams/DeleteActivityDiagram.png"}}),_v(" "),_m(65),_v(" "),_m(66),_v(" "),_m(67),_v(" "),_c('br'),_v(" "),_c('br'),_v(" "),_m(68),_v(" "),_m(69),_v(" "),_c('p',[_v("The add feature allows a person to be added to the address book. It accepts the parameters name, phone, location, email,\nremark and tag. The name parameter is compulsory, while the rest are optional. Multiple tags are accepted for one\nperson.")]),_v(" "),_m(70),_v(" "),_m(71),_v(" "),_c('pic',{attrs:{"src":"/tp/diagrams/AddSequenceDiagram-Logic.png","alt":"Interactions Inside the Logic Component for the `:add` Command"}}),_v(" "),_c('p',[_v("The parsing process is described in detail in this sequence diagram:")]),_v(" "),_c('pic',{attrs:{"src":"/tp/diagrams/AddSequenceDiagram-Tokenise.png","alt":"Interactions Inside the Logic Component for parsing"}}),_v(" "),_m(72),_v(" "),_c('pic',{attrs:{"src":"/tp/diagrams/AddSequenceDiagram-Model.png","alt":"AddSequenceDiagram-Model"}}),_v(" "),_c('br'),_v(" "),_c('br'),_v(" "),_c('br'),_v(" "),_m(73),_v(" "),_m(74),_v(" "),_m(75),_v(" "),_m(76),_v(" "),_c('p',[_v("Constructor Variants:")]),_v(" "),_m(77),_v(" "),_c('p',[_v("Attributes:")]),_v(" "),_m(78),_v(" "),_c('p',[_v("Given below is an example usage scenario and how the export process behaves at each step.")]),_v(" "),_m(79),_v(" "),_m(80),_v(" "),_m(81),_v(" "),_m(82),_v(" "),_m(83),_v(" "),_c('p',[_v("The following sequence diagram explains how the export operation works:")]),_v(" "),_c('pic',{attrs:{"src":"/tp/diagrams/ExportSequenceDiagram.png","alt":"ExportSequenceDiagram"}}),_v(" "),_m(84),_v(" "),_m(85),_v(" "),_m(86),_v(" "),_m(87),_v(" "),_m(88),_v(" "),_m(89),_v(" "),_c('br'),_v(" "),_c('br'),_v(" "),_m(90),_v(" "),_m(91),_v(" "),_m(92),_v(" "),_m(93),_v(" "),_m(94),_v(" "),_m(95),_v(" "),_m(96),_v(" "),_m(97),_v(" "),_m(98),_m(99),_v(" "),_m(100),_v(" "),_c('p',[_v("Step 2. The encrypted data is stored securely. When needed, the user can request to decrypt the information.")]),_v(" "),_m(101),_v(" "),_c('box',{attrs:{"type":"info","seamless":""}},[_c('p',[_c('strong',[_v("Note:")]),_v(" If an error occurs during encryption or decryption (e.g., if the secret key is invalid or corrupted), the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("EncryptionManager")]),_v(" will handle the error gracefully and return an appropriate error message.")])]),_v(" "),_c('p',[_v("The following sequence diagram shows how the encryption process works:")]),_v(" "),_c('pic',{attrs:{"src":"/tp/diagrams/EncryptionSequenceDiagram.png","alt":"EncryptionSequenceDiagram"}}),_v(" "),_c('box',{attrs:{"type":"info","seamless":""}},[_c('p',[_c('strong',[_v("Note:")]),_v(" The sequence diagram simplifies the encryption and decryption processes to focus on the main interactions between components.")])]),_v(" "),_m(102),_v(" "),_m(103),_v(" "),_m(104),_v(" "),_m(105),_v(" "),_m(106),_v(" "),_c('br'),_v(" "),_c('br'),_v(" "),_m(107),_v(" "),_m(108),_v(" "),_m(109),_v(" "),_m(110),_v(" "),_m(111),_v(" "),_m(112),_v(" "),_m(113),_v(" "),_m(114),_v(" "),_m(115),_m(116),_v(" "),_m(117),_v(" "),_c('p',[_v("Step 2. The entered password is hashed and saved securely, along with a generated salt.")]),_v(" "),_m(118),_v(" "),_c('box',{attrs:{"type":"info","seamless":""}},[_c('p',[_c('strong',[_v("Note:")]),_v(" If an error occurs during password hashing or verification (e.g., if the stored format is incorrect), the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("PasswordManager")]),_v(" will handle the error gracefully and provide an appropriate error message.")])]),_v(" "),_c('p',[_v("The following activity diagram illustrates how the password management process operates:")]),_v(" "),_c('pic',{attrs:{"src":"/tp/diagrams/PasswordManagementActivityDiagram.png","alt":"PasswordManagementActivityDiagram"}}),_v(" "),_c('box',{attrs:{"type":"info","seamless":""}},[_c('p',[_c('strong',[_v("Note:")]),_v(" The activity diagram simplifies the password management processes to highlight the flow for user authentication.")])]),_v(" "),_m(119),_v(" "),_m(120),_v(" "),_m(121),_v(" "),_m(122),_v(" "),_m(123),_v(" "),_c('hr'),_v(" "),_m(124),_v(" "),_m(125),_v(" "),_m(126),_v(" "),_m(127),_v(" "),_m(128),_v(" "),_c('br'),_v(" "),_c('br'),_v(" "),_m(129),_v(" "),_m(130),_v(" "),_c('p',[_v("Listed below are user stories for features that have already been implemented in the current version of the application.")]),_v(" "),_m(131),_m(132),_v(" "),_c('p',[_v("Listed below are user stories that represent features that we have not implemented yet, but plan to in the future.")]),_v(" "),_m(133),_c('br'),_v(" "),_c('br'),_v(" "),_m(134),_v(" "),_m(135),_v(" "),_m(136),_v(" "),_m(137),_v(" "),_m(138),_v(" "),_m(139),_v(" "),_m(140),_v(" "),_m(141),_v(" "),_m(142),_v(" "),_m(143),_v(" "),_m(144),_v(" "),_m(145),_v(" "),_m(146),_v(" "),_m(147),_v(" "),_m(148),_v(" "),_m(149),_v(" "),_m(150),_v(" "),_m(151),_v(" "),_m(152),_v(" "),_m(153),_v(" "),_m(154),_v(" "),_m(155),_v(" "),_m(156),_v(" "),_m(157),_v(" "),_m(158),_v(" "),_m(159),_v(" "),_m(160),_v(" "),_m(161),_v(" "),_m(162),_v(" "),_m(163),_v(" "),_m(164),_v(" "),_m(165),_v(" "),_m(166),_v(" "),_m(167),_v(" "),_m(168),_v(" "),_m(169),_v(" "),_m(170),_v(" "),_m(171),_v(" "),_m(172),_v(" "),_m(173),_v(" "),_m(174),_v(" "),_m(175),_v(" "),_m(176),_v(" "),_m(177),_v(" "),_c('br'),_v(" "),_c('br'),_v(" "),_m(178),_v(" "),_m(179),_v(" "),_c('br'),_v(" "),_c('br'),_v(" "),_m(180),_v(" "),_m(181),_v(" "),_c('hr'),_v(" "),_m(182),_v(" "),_m(183),_v(" "),_m(184),_v(" "),_c('hr'),_v(" "),_m(185),_v(" "),_c('p',[_v("Team Size: 4")]),_v(" "),_m(186),_v(" "),_c('hr'),_v(" "),_m(187),_v(" "),_c('p',[_v("Given below are instructions to test the app manually.")]),_v(" "),_c('box',{attrs:{"type":"info","seamless":""}},[_c('p',[_c('strong',[_v("Note:")]),_v(" These instructions only provide a starting point for testers to work on;\ntesters are expected to do more "),_c('em',[_v("exploratory")]),_v(" testing.")])]),_v(" "),_m(188),_v(" "),_m(189),_v(" "),_c('br'),_v(" "),_m(190),_v(" "),_m(191),_v(" "),_m(192),_v(" "),_m(193),_v(" "),_m(194),_v(" "),_m(195),_v(" "),_m(196),_v(" "),_m(197),_v(" "),_m(198),_v(" "),_m(199),_v(" "),_m(200),_v(" "),_m(201),_v(" "),_m(202),_v(" "),_m(203),_v(" "),_m(204),_v(" "),_m(205),_v(" "),_m(206),_v(" "),_m(207),_v(" "),_m(208),_v(" "),_m(209),_v(" "),_m(210),_v(" "),_m(211),_v(" "),_m(212),_v(" "),_m(213),_v(" "),_m(214),_v(" "),_m(215),_v(" "),_m(216),_v(" "),_m(217),_v(" "),_m(218),_v(" "),_c('p',[_v("This project was challenging to implement, especially with our ambition of making it as keyboard-friendly as possible. Implementing keyboard shortcuts, as well as keyboard-friendly UI was not easy.")]),_v(" "),_m(219)],1),_v(" "),_c('overlay-source',{attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"},[_c('overlay-source',{staticClass:"nav nav-pills flex-column my-0 small no-flex-wrap",attrs:{"id":"mb-page-nav","tag-name":"nav","to":"mb-page-nav"}},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#vbook-developer-guide"}},[_v("VBook Developer Guide‎")]),_v(" "),_c('nav',{staticClass:"nav nav-pills flex-column my-0 nested no-flex-wrap"},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#acknowledgements"}},[_v("Acknowledgements‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#setting-up-getting-started"}},[_v("Setting up, getting started‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#design"}},[_v("Design‎")]),_v(" "),_c('nav',{staticClass:"nav nav-pills flex-column my-0 nested no-flex-wrap"},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#architecture"}},[_v("Architecture‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#ui-component"}},[_v("UI component‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#logic-component"}},[_v("Logic component‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#model-component"}},[_v("Model component‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#storage-component"}},[_v("Storage component‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#common-classes"}},[_v("Common classes‎")])]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#implementation"}},[_v("Implementation‎")]),_v(" "),_c('nav',{staticClass:"nav nav-pills flex-column my-0 nested no-flex-wrap"},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#undo-redo-feature"}},[_v("Undo/redo feature‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#remove-feature"}},[_v("Remove Feature‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#add-feature"}},[_v("Add Feature‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#export-feature"}},[_v("Export Feature‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#encryption-feature"}},[_v("Encryption Feature‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#password-management-feature"}},[_v("Password Management Feature‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#design-considerations-for-password-management-feature"}},[_v("Design Considerations for Password Management Feature‎")])]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#documentation-logging-testing-configuration-dev-ops"}},[_v("Documentation, logging, testing, configuration, dev-ops‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#appendix-requirements"}},[_v("Appendix: Requirements‎")]),_v(" "),_c('nav',{staticClass:"nav nav-pills flex-column my-0 nested no-flex-wrap"},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#product-scope"}},[_v("Product scope‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#user-stories"}},[_v("User stories‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#use-cases"}},[_v("Use cases‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#non-functional-requirements"}},[_v("Non-Functional Requirements‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#glossary"}},[_v("Glossary‎")])]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#appendix-known-issues"}},[_v("Appendix: Known Issues‎")]),_v(" "),_c('nav',{staticClass:"nav nav-pills flex-column my-0 nested no-flex-wrap"},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#failing-tests-on-windows-when-run-more-than-once"}},[_v("Failing tests on Windows when run more than once‎")])]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#appendix-planned-enhancements"}},[_v("Appendix: Planned Enhancements‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#appendix-instructions-for-manual-testing"}},[_v("Appendix: Instructions for manual testing‎")]),_v(" "),_c('nav',{staticClass:"nav nav-pills flex-column my-0 nested no-flex-wrap"},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#launch"}},[_v("Launch‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#opening-the-help-window"}},[_v("Opening the Help Window‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#adding-a-person"}},[_v("Adding a person‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#listing-all-persons"}},[_v("Listing all persons‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#editing-a-person"}},[_v("Editing a person‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#export"}},[_v("Export‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#undo"}},[_v("Undo‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#redo"}},[_v("Redo‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#find"}},[_v("Find‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#removing-a-person"}},[_v("Removing a person‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#clearing-all-persons"}},[_v("Clearing all Persons‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#quit-command"}},[_v("Quit Command‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#saving-data"}},[_v("Saving data‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#password-prompt"}},[_v("Password Prompt‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#encryption-manager"}},[_v("Encryption Manager‎")])]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#appendix-effort"}},[_v("Appendix: Effort‎")])])])],1)]),_v(" "),_c('scroll-top-button')],1),_v(" "),_m(220)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('h1',{attrs:{"id":"vbook-developer-guide"}},[_v("VBook Developer Guide"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#vbook-developer-guide","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"acknowledgements"}},[_c('strong',[_v("Acknowledgements")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#acknowledgements","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('a',{attrs:{"href":"https://github.com/nus-cs2103-AY2425S1/tp"}},[_v("AB3")]),_v(" for being the base of our project.")]),_v(" "),_c('li',[_v("Libraries used: "),_c('a',{attrs:{"href":"https://openjfx.io/"}},[_v("JavaFX")]),_v(", "),_c('a',{attrs:{"href":"https://github.com/FasterXML/jackson"}},[_v("Jackson")]),_v(", "),_c('a',{attrs:{"href":"https://github.com/junit-team/junit5"}},[_v("JUnit5")]),_v(".")]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://github.com/AY2021S2-CS2103T-T12-4/tp"}},[_v("imPoster")]),_v(", a CS2103T senior group where we adapted our "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("MainWindow.fxml")]),_v(" code from.")]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://stackoverflow.com/a/2861125"}},[_v("StackOverflow post on Java password hashing")]),_v(": We followed this post from StackOverflow to guide us in the password hashing function in "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("PasswordManager.java")]),_v(".")])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"setting-up-getting-started"}},[_c('strong',[_v("Setting up, getting started")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#setting-up-getting-started","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Refer to the guide "),_c('a',{attrs:{"href":"/tp/SettingUp.html"}},[_c('em',[_v("Setting up and getting started")])]),_v(".")])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"design"}},[_c('strong',[_v("Design")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#design","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"architecture"}},[_v("Architecture"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#architecture","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("The "),_c('em',[_c('strong',[_v("Architecture Diagram")])]),_v(" given above explains the high-level design of the App.")])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Main components of the architecture")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Main")])]),_v(" (consisting of classes "),_c('a',{attrs:{"href":"https://github.com/se-edu/addressbook-level3/tree/master/src/main/java/seedu/address/Main.java"}},[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Main")])]),_v(" and "),_c('a',{attrs:{"href":"https://github.com/se-edu/addressbook-level3/tree/master/src/main/java/seedu/address/MainApp.java"}},[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("MainApp")])]),_v(") is in charge of the app launch and shut down.")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("At app launch, it initializes the other components in the correct sequence, and connects them up with each other.")]),_v(" "),_c('li',[_v("At shut down, it shuts down the other components and invokes cleanup methods where necessary.")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('a',{attrs:{"href":"#ui-component"}},[_c('strong',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("UI")])])]),_v(": The UI of the App.")]),_v(" "),_c('li',[_c('a',{attrs:{"href":"#logic-component"}},[_c('strong',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic")])])]),_v(": The command executor.")]),_v(" "),_c('li',[_c('a',{attrs:{"href":"#model-component"}},[_c('strong',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model")])])]),_v(": Holds the data of the App in memory.")]),_v(" "),_c('li',[_c('a',{attrs:{"href":"#storage-component"}},[_c('strong',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Storage")])])]),_v(": Reads data from, and writes data to, the hard disk.")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"#common-classes"}},[_c('strong',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Commons")])])]),_v(" represents a collection of classes used by multiple other components.")])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("How the architecture components interact with each other")])])}
},function anonymous(
) {
with(this){return _c('p',[_v("The "),_c('em',[_v("Sequence Diagram")]),_v(" below shows how the components interact with each other for the scenario where the user issues the command "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":rm -i 1")]),_v(".")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("defines its "),_c('em',[_v("API")]),_v(" in an "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("interface")]),_v(" with the same name as the Component.")]),_v(" "),_c('li',[_v("implements its functionality using a concrete "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("{Component Name}Manager")]),_v(" class (which follows the corresponding API "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("interface")]),_v(" mentioned in the previous point.")])])}
},function anonymous(
) {
with(this){return _c('p',[_v("For example, the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic")]),_v(" component defines its API in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic.java")]),_v(" interface and implements its functionality using the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("LogicManager.java")]),_v(" class which follows the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic")]),_v(" interface. Other components interact with a given component through its interface rather than the concrete class (reason: to prevent outside component's being coupled to the implementation of a component), as illustrated in the (partial) class diagram below.")])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"ui-component"}},[_v("UI component"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#ui-component","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("The "),_c('strong',[_v("API")]),_v(" of this component is specified in "),_c('a',{attrs:{"href":"https://github.com/se-edu/addressbook-level3/tree/master/src/main/java/seedu/address/ui/Ui.java"}},[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Ui.java")])])])}
},function anonymous(
) {
with(this){return _c('p',[_v("The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("UI")]),_v(" consists of a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("MainWindow")]),_v(" that is made up of parts e.g."),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("CommandBox")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ResultDisplay")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("PersonListPanel")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("StatusBarFooter")]),_v(" etc. All these, including the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("MainWindow")]),_v(", inherit from the abstract "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("UiPart")]),_v(" class which captures the commonalities between classes that represent parts of the visible GUI. Other than the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("MainWindow")]),_v(", we have created a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("PasswordPromptDialog")]),_v(" that is used to prompt the user for a password when they try to access the app.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("UI")]),_v(" component uses the JavaFx UI framework. The layout of these "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("UI")]),_v(" parts are defined in matching "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(".fxml")]),_v(" files that are in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("src/main/resources/view")]),_v(" folder. For example, the layout of the "),_c('a',{attrs:{"href":"https://github.com/se-edu/addressbook-level3/tree/master/src/main/java/seedu/address/ui/MainWindow.java"}},[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("MainWindow")])]),_v(" is specified in "),_c('a',{attrs:{"href":"https://github.com/se-edu/addressbook-level3/tree/master/src/main/resources/view/MainWindow.fxml"}},[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("MainWindow.fxml")])])])}
},function anonymous(
) {
with(this){return _c('p',[_v("The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("UI")]),_v(" component,")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("executes user commands using the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic")]),_v(" component.")]),_v(" "),_c('li',[_v("listens for changes to "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model")]),_v(" data so that the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("UI")]),_v(" can be updated with the modified data.")]),_v(" "),_c('li',[_v("keeps a reference to the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic")]),_v(" component, because the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("UI")]),_v(" relies on the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic")]),_v(" to execute commands.")]),_v(" "),_c('li',[_v("depends on some classes in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model")]),_v(" component, as it displays "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Person")]),_v(" object residing in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model")]),_v(".")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"logic-component"}},[_v("Logic component"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#logic-component","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("API")]),_v(" : "),_c('a',{attrs:{"href":"https://github.com/se-edu/addressbook-level3/tree/master/src/main/java/seedu/address/logic/Logic.java"}},[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic.java")])])])}
},function anonymous(
) {
with(this){return _c('p',[_v("Here's a (partial) class diagram of the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic")]),_v(" component:")])}
},function anonymous(
) {
with(this){return _c('p',[_v("The sequence diagram below illustrates the interactions within the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic")]),_v(" component, taking "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("execute(\":rm -i 1\")")]),_v(" API call as an example.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("How the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic")]),_v(" component works:")])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_v("When "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic")]),_v(" is called upon to execute a command, it is passed to an "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("AddressBookParser")]),_v(" object which in turn creates a parser that matches the command (e.g., "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("DeleteCommandParser")]),_v(") and uses it to parse the command.")]),_v(" "),_c('li',[_v("This results in a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Command")]),_v(" object (more precisely, an object of one of its subclasses e.g., "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("DeleteCommand")]),_v(") which is executed by the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("LogicManager")]),_v(".")]),_v(" "),_c('li',[_v("The command can communicate with the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model")]),_v(" when it is executed (e.g. to remove a person)."),_c('br'),_v("\nIt can take several interactions (between the command object and the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model")]),_v(") to achieve the result.")]),_v(" "),_c('li',[_v("The result of the command execution is encapsulated as a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("CommandResult")]),_v(" object which is returned back from "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic")]),_v(".")])])}
},function anonymous(
) {
with(this){return _c('p',[_v("Here are the other classes in "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic")]),_v(" (omitted from the class diagram above) that are used for parsing a user command:")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("When called upon to parse a user command, the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("AddressBookParser")]),_v(" class creates an "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("XYZCommandParser")]),_v(" ("),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("XYZ")]),_v(" is a placeholder for the specific command name e.g., "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("AddCommandParser")]),_v(") which uses the other classes shown above to parse the user command and create a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("XYZCommand")]),_v(" object (e.g., "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("AddCommand")]),_v(") which the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("AddressBookParser")]),_v(" returns back as a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Command")]),_v(" object.")]),_v(" "),_c('li',[_v("All "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("XYZCommandParser")]),_v(" classes (e.g., "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("AddCommandParser")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("DeleteCommandParser")]),_v(", ...) inherit from the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Parser")]),_v(" interface so that they can be treated similarly where possible e.g, during testing.")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"model-component"}},[_v("Model component"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#model-component","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("API")]),_v(" : "),_c('a',{attrs:{"href":"https://github.com/se-edu/addressbook-level3/tree/master/src/main/java/seedu/address/model/Model.java"}},[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model.java")])])])}
},function anonymous(
) {
with(this){return _c('p',[_v("The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model")]),_v(" component,")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("stores the address book data i.e., all "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Person")]),_v(" objects (which are contained in a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("UniquePersonList")]),_v(" object).")]),_v(" "),_c('li',[_v("stores the currently 'selected' "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Person")]),_v(" objects (e.g., results of a search query) as a separate "),_c('em',[_v("filtered")]),_v(" list which is exposed to outsiders as an unmodifiable "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ObservableList<Person>")]),_v(" that can be 'observed' e.g. the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("UI")]),_v(" can be bound to this list so that the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("UI")]),_v(" automatically updates when the data in the list change.")]),_v(" "),_c('li',[_v("stores a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("UserPref")]),_v(" object that represents the user’s preferences. This is exposed to the outside as a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ReadOnlyUserPref")]),_v(" objects.")]),_v(" "),_c('li',[_v("does not depend on any of the other three components (as the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model")]),_v(" represents data entities of the domain, they should make sense on their own without depending on other components)")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"storage-component"}},[_v("Storage component"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#storage-component","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("API")]),_v(" : "),_c('a',{attrs:{"href":"https://github.com/se-edu/addressbook-level3/tree/master/src/main/java/seedu/address/storage/Storage.java"}},[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Storage.java")])])])}
},function anonymous(
) {
with(this){return _c('p',[_v("The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Storage")]),_v(" component")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("can save both address book data and user preference data in JSON format, and read them back into corresponding objects.")]),_v(" "),_c('li',[_v("inherits from both "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("AddressBookStorage")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("UserPrefStorage")]),_v(", which means it can be treated as either one (if only the functionality of only one is needed).")]),_v(" "),_c('li',[_v("depends on some classes in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model")]),_v(" component (because the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Storage")]),_v(" component's job is to save/retrieve objects that belong to the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model")]),_v(")")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"common-classes"}},[_v("Common classes"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#common-classes","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Classes used by multiple components are in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("seedu.address.commons")]),_v(" package.")])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"implementation"}},[_c('strong',[_v("Implementation")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#implementation","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"undo-redo-feature"}},[_v("Undo/redo feature"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#undo-redo-feature","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"implementation-2"}},[_v("Implementation"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#implementation-2","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("The undo/redo mechanism is facilitated by "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("VersionedAddressBook")]),_v(". It extends "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("AddressBook")]),_v(" with an undo/redo history, stored internally as an "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("addressBookStateList")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("currentStatePointer")]),_v(". Additionally, it implements the following operations:")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("VersionedAddressBook#commit()")]),_v(" — Saves the current address book state in its history.")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("VersionedAddressBook#undo()")]),_v(" — Restores the previous address book state from its history.")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("VersionedAddressBook#redo()")]),_v(" — Restores a previously undone address book state from its history.")])])}
},function anonymous(
) {
with(this){return _c('p',[_v("These operations are exposed in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model")]),_v(" interface as "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model#commitAddressBook()")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model#undoAddressBook()")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model#redoAddressBook()")]),_v(" respectively.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Step 1. The user launches the application for the first time. The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("VersionedAddressBook")]),_v(" will be initialized with the initial address book state, and the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("currentStatePointer")]),_v(" pointing to that single address book state.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Step 2. The user executes "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":rm -i 5")]),_v(" command to remove the 5th person in the address book. The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":rm")]),_v(" command calls "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model#commitAddressBook()")]),_v(", causing the modified state of the address book after the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":rm -i 5")]),_v(" command executes to be saved in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("addressBookStateList")]),_v(", and the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("currentStatePointer")]),_v(" is shifted to the newly inserted address book state.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Step 3. The user executes "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":add -n David")]),_v(" to add a new person. The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":add")]),_v(" command also calls "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model#commitAddressBook()")]),_v(", causing another modified address book state to be saved into the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("addressBookStateList")]),_v(".")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Step 4. The user now decides that adding the person was a mistake, and decides to undo that action by executing the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":undo")]),_v(" command. The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":undo")]),_v(" command will call "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model#undoAddressBook()")]),_v(", which will shift the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("currentStatePointer")]),_v(" once to the left, pointing it to the previous address book state, and restores the address book to that state.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("The following sequence diagram shows how an undo operation goes through the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic")]),_v(" component:")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Similarly, how an undo operation goes through the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model")]),_v(" component is shown below:")])}
},function anonymous(
) {
with(this){return _c('p',[_v("The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":redo")]),_v(" command does the opposite — it calls "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model#redoAddressBook()")]),_v(", which shifts the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("currentStatePointer")]),_v(" once to the right, pointing to the previously undone state, and restores the address book to that state.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Step 5. The user then decides to execute the command "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":list")]),_v(". Commands that do not modify the address book, such as "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":list")]),_v(", will usually not call "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model#commitAddressBook()")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model#undoAddressBook()")]),_v(" or "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model#redoAddressBook()")]),_v(". Thus, the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("addressBookStateList")]),_v(" remains unchanged.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Step 6. The user executes "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":clear")]),_v(", which calls "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model#commitAddressBook()")]),_v(". Since the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("currentStatePointer")]),_v(" is not pointing at the end of the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("addressBookStateList")]),_v(", all address book states after the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("currentStatePointer")]),_v(" will be purged. Reason: It no longer makes sense to redo the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":add -n David")]),_v(" command. This is the behavior that most modern desktop applications follow.")])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"design-considerations"}},[_v("Design considerations:"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#design-considerations","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Aspect: How undo & redo executes:")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('p',[_c('strong',[_v("Alternative 1 (current choice):")]),_v(" Saves the entire address book.")]),_v(" "),_c('ul',[_c('li',[_v("Pros: Easy to implement.")]),_v(" "),_c('li',[_v("Cons: May have performance issues in terms of memory usage.")])])]),_v(" "),_c('li',[_c('p',[_c('strong',[_v("Alternative 2:")]),_v(" Individual command knows how to undo/redo by\nitself.")]),_v(" "),_c('ul',[_c('li',[_v("Pros: Will use less memory (e.g. for "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":remove")]),_v(", just save the person being removed).")]),_v(" "),_c('li',[_v("Cons: We must ensure that the implementation of each individual command is correct.")])])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"remove-feature"}},[_v("Remove Feature"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#remove-feature","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"implementation-3"}},[_v("Implementation"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#implementation-3","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("How the remove feature works:\nFormat: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":remove -i INDEX1, INDEX2...")])])}
},function anonymous(
) {
with(this){return _c('p',[_v("The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("DeleteCommand")]),_v(" class has a method "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("DeleteCommand#execute(Model model)")]),_v(" that calls the ModelManager."),_c('br'),_v("\nThe "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ModelManager")]),_v(" class has a method "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ModelManager#deletePerson(Person target)")]),_v(" that calls the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("AddressBook")]),_v(" class."),_c('br'),_v("\nThe "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("AddressBook")]),_v(" class has a method "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("AddressBook#removePerson(Person key)")]),_v(" that removes a person from the UniquePersonList field "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("persons")]),_v(" in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("AddressBook")]),_v(" class.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("The following sequence diagram shows how a remove operation goes through the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic")]),_v(" component:")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Similarly, how a remove operation goes through the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model")]),_v(" component is shown below:")])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Design considerations:")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Aspect: How remove executes:")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('p',[_c('strong',[_v("Alternative 1 (current choice):")]),_v(" Removes the person by index.")]),_v(" "),_c('ul',[_c('li',[_v("Pros: Easy to implement.")]),_v(" "),_c('li',[_v("Cons: Requires the user to know the index of the person to remove.")])])]),_v(" "),_c('li',[_c('p',[_c('strong',[_v("Alternative 2:")]),_v(" Removes the person by name.")]),_v(" "),_c('ul',[_c('li',[_v("Pros: More user-friendly as the user can specify the name.")]),_v(" "),_c('li',[_v("Cons: Requires additional logic to handle duplicate names.")])])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"add-feature"}},[_v("Add Feature"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#add-feature","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"implementation-4"}},[_v("Implementation"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#implementation-4","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("The add feature follows the remove feature in that "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("AddCommand")]),_v(" calls "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ModelManager")]),_v(", which calls the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("AddressBook")]),_v("\nclass, which adds a person to the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("UniquePersonList")]),_v(" class. Therefore, the class and activity diagram will be omitted\nfor conciseness.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("The following sequence diagram shows how an add operation goes through the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic")]),_v(" component:")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Similar to the remove feature, how an add operation goes through the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model")]),_v(" component is shown below:")])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"export-feature"}},[_v("Export Feature"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#export-feature","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"implementation-5"}},[_v("Implementation"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#implementation-5","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ExportCommand")]),_v(" class is responsible for exporting address book data to a user-specified location in JSON format. It provides flexibility in its usage by allowing a destination to be selected via a file chooser or by setting a predetermined destination file, which is particularly useful for testing purposes. The data to be exported is encrypted, and the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ExportCommand")]),_v(" handles decryption, export location selection, and file I/O operations. The following outlines its components and workflow.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ExportCommand")]),_v(" class facilitates this export functionality and manages file I/O operations in a structured, asynchronous workflow.")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ExportCommand()")]),_v(": The default constructor for regular use, opening a file chooser dialog to select the export destination.")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ExportCommand(File destinationFile, File sourceFile, String keyPath)")]),_v(": An overloaded constructor that allows specifying a destination file and encryption key path directly, which is particularly useful for testing.")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("destinationFile")]),_v(": The file chosen or set as the target for the export.")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("sourceFile")]),_v(": A temporary file that holds the JSON data to be exported.")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("keyPath")]),_v(": The path to the decryption key required for decrypting the address book data.")])])}
},function anonymous(
) {
with(this){return _c('p',[_v("Step 1. The user initiates an export by executing "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":export")]),_v(". The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ExportCommand")]),_v(" will attempt to decrypt the data\nbefore exporting it.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Step 2. The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("execute(Model model)")]),_v(" method reads encrypted data from the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("sourceFile")]),_v(", decrypting it with\n"),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("EncryptionManager.decrypt()")]),_v(" using the provided "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("keyPath")]),_v(". The decrypted data is written to a temporary file "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("vbook.json")]),_v(".")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Step 3. If "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("destinationFile")]),_v(" is not set, "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ExportCommand")]),_v(" invokes "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("chooseExportLocation(Stage stage)")]),_v(", which displays\na file chooser dialog for the user to select an export location. If the user cancels this dialog, the export process\nis aborted with an error message.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Step 4. The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("performExport(File sourceFile, File destinationFile)")]),_v(" method copies the decrypted data to the specified "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("destinationFile")]),_v(", using "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Files.copy()")]),_v(" with "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("StandardCopyOption.REPLACE_EXISTING")]),_v(" to overwrite any existing file. The temporary file is then deleted.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Note: The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("performExport")]),_v(" method is asynchronous, leveraging "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("CompletableFuture")]),_v(" to manage successful completion or error handling, ensuring smooth performance without blocking the main application thread.")])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Design Considerations:")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Aspect: Export Execution and Destination Selection")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Alternative 1 (current choice)")]),_v(": Use a file chooser dialog to allow the user to select the export location.")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Pros: User-friendly, provides flexibility in specifying the export location.")]),_v(" "),_c('li',[_v("Cons: Requires user interaction, which may be cumbersome for repeated exports.")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Alternative 2")]),_v(": Set a default export location without user input.")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Pros: Streamlined and faster for frequent exports.")]),_v(" "),_c('li',[_v("Cons: Less flexible, as it may overwrite existing files without warning.")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"encryption-feature"}},[_v("Encryption Feature"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#encryption-feature","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"implementation-6"}},[_v("Implementation"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#implementation-6","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("The encryption mechanism is managed by the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("EncryptionManager")]),_v(" class. This component is responsible for securely encrypting and decrypting sensitive data using the AES (Advanced Encryption Standard) algorithm. The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("EncryptionManager")]),_v(" performs encryption and decryption with a secret key, which is securely loaded and stored using Java's Key Store API. The implementation details are as follows:")])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"methods-overview"}},[_v("Methods Overview"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#methods-overview","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('strong',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("encrypt(String data, String keyPath)")])]),_v(":\n"),_c('ul',[_c('li',[_v("Encrypts plain text data using the AES algorithm.")]),_v(" "),_c('li',[_v("Takes the path to the key store as an argument (defaulting to "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("vbook.jks")]),_v(" if not provided).")]),_v(" "),_c('li',[_v("Returns a byte array containing the encrypted data.\n"),_c('br')])])]),_v(" "),_c('li',[_c('strong',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("decrypt(byte[] data, String keyPath)")])]),_v(":\n"),_c('ul',[_c('li',[_v("Decrypts the given encrypted byte array back into plain text.")]),_v(" "),_c('li',[_v("Also takes the path to the key store as an argument (defaulting to "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("vbook.jks")]),_v(" if not provided).")]),_v(" "),_c('li',[_v("Returns the decrypted string.\n"),_c('br')])])]),_v(" "),_c('li',[_c('strong',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("generateKey(String keyPath)")])]),_v(":\n"),_c('ul',[_c('li',[_v("Generates a new AES secret key and stores it in a local key store file.")]),_v(" "),_c('li',[_v("If the key store already exists, it does not overwrite it but notifies that the alias already exists.")]),_v(" "),_c('li',[_v("Saves the generated key under the alias "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("vbook-encryption")]),_v(".\n"),_c('br')])])]),_v(" "),_c('li',[_c('strong',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("getKey(String keyPath)")])]),_v(":\n"),_c('ul',[_c('li',[_v("Retrieves the AES secret key from the specified key store.")]),_v(" "),_c('li',[_v("If the key store does not exist, it calls "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("generateKey()")]),_v(" to create one.")]),_v(" "),_c('li',[_v("Returns the retrieved secret key.\n"),_c('br')])])])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"usage-in-application"}},[_v("Usage in Application"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#usage-in-application","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("EncryptionManager")]),_v(" is used in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ExportCommand")]),_v(" to decrypt data before exporting it and in "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("JsonAddressBookStorage")]),_v(" to encrypt data before writing it to a file.")])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"usage"}},[_v("Usage"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#usage","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs java"}},[_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("// Encryption")]),_v("\n")]),_c('span',[_v("String jsonData = JsonUtil.toJsonString("),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("new")]),_v(" JsonSerializableAddressBook(addressBook));\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("byte")]),_v("[] encryptedData = EncryptionManager.encrypt(jsonData, "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("this")]),_v(".keyPath);\n")]),_c('span',[_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("// Decryption")]),_v("\n")]),_c('span',[_v("jsonData = EncryptionManager.decrypt(encryptedData, "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("this")]),_v(".keyPath);\n")])])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"example-usage-scenario"}},[_v("Example Usage Scenario"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#example-usage-scenario","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Step 1. The user initially adds a new contact in the address book. The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("EncryptionManager")]),_v(" uses the AES algorithm and the secret key to encrypt the information before saving it.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Step 3. The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("EncryptionManager")]),_v(" decrypts the data using the same AES algorithm and the secret key, ensuring that the information is securely handled at all times.")])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"design-considerations-for-encryption-feature"}},[_v("Design Considerations for Encryption Feature"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#design-considerations-for-encryption-feature","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h5',{attrs:{"id":"core-limitation"}},[_v("Core Limitation"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#core-limitation","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_c('strong',[_v("Risk of Local KeyStore Exposure")]),_v(":")]),_v(" "),_c('ul',[_c('li',[_v("If a hacker gains access to the JKS file containing the encryption keys, they could decrypt sensitive data. This represents a fundamental limitation of local storage, as the security of the keys relies on the local file system's security.")])])]),_v(" "),_c('li',[_c('p',[_c('strong',[_v("Alternative Storage Locations")]),_v(":")]),_v(" "),_c('ul',[_c('li',[_v("Storing the JKS file in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("JAVA_HOME/lib/security/cacerts")]),_v(" directory is an option, but this depends on the user’s configuration and permissions. Users might not have their "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("JAVA_HOME")]),_v(" path set correctly, which can lead to access issues.")])])]),_v(" "),_c('li',[_c('p',[_c('strong',[_v("Security Through Obscurity")]),_v(":")]),_v(" "),_c('ul',[_c('li',[_v("While relying on obscurity—such as using less common paths for the JKS file—can add a layer of security, it should not be the sole defense mechanism. Obscurity alone does not adequately protect against determined attacks.")])])])])}
},function anonymous(
) {
with(this){return _c('h5',{attrs:{"id":"compromise-between-security-and-user-experience"}},[_v("Compromise Between Security and User Experience"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#compromise-between-security-and-user-experience","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('strong',[_v("User Experience Considerations")]),_v(":\n"),_c('ul',[_c('li',[_v("As a local application, VBook prioritizes convenience, which may lead users to prefer simpler access to their data over maximum security. Finding a balance between security and usability is crucial.")]),_v(" "),_c('li',[_v("Given that VBook handles contact data, adequate security measures must be in place while ensuring users are not overwhelmed by complex key management.")])])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"password-management-feature"}},[_v("Password Management Feature"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#password-management-feature","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"implementation-7"}},[_v("Implementation"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#implementation-7","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("The password management mechanism is handled by the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("PasswordManager")]),_v(" class. This component is responsible for securely hashing and verifying user passwords using the "),_c('strong',[_v("PBKDF2")]),_v(" (Password-Based Key Derivation Function 2) algorithm with "),_c('strong',[_v("HMAC-SHA1")]),_v(". The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("PasswordManager")]),_v(" ensures that passwords are safely stored in a local text file, employing a salting strategy to enhance security. The implementation details are as follows:")])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"methods-overview-2"}},[_v("Methods Overview"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#methods-overview-2","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('strong',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("readPassword(String path)")])]),_v(":\n"),_c('ul',[_c('li',[_v("Reads the stored hashed password from the specified file (defaulting to "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("password.txt")]),_v(").")]),_v(" "),_c('li',[_v("Returns the hashed password as a string or "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("null")]),_v(" if the file does not exist.\n"),_c('br')])])]),_v(" "),_c('li',[_c('strong',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("savePassword(String password, String path)")])]),_v(":\n"),_c('ul',[_c('li',[_v("Accepts a plaintext password, generates a salt, hashes the password using "),_c('strong',[_v("PBKDF2")]),_v(", and saves the resulting hash and salt to the specified file (default: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("password.txt")]),_v(").")]),_v(" "),_c('li',[_v("Creates the file if it does not already exist.\n"),_c('br')])])]),_v(" "),_c('li',[_c('strong',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("isPasswordCorrect(String inputPassword, String path)")])]),_v(":\n"),_c('ul',[_c('li',[_v("Compares the input plaintext password against the stored hashed password.")]),_v(" "),_c('li',[_v("Reads the stored hash and salt, hashes the input password, and returns "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("true")]),_v(" if they match or "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("false")]),_v(" otherwise.\n"),_c('br')])])]),_v(" "),_c('li',[_c('strong',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("hashPassword(String password, byte[] salt)")])]),_v(":\n"),_c('ul',[_c('li',[_v("Hashes the provided password using the specified salt with "),_c('strong',[_v("PBKDF2")]),_v(" and returns a string containing both the salt and hash encoded in Base64.\n"),_c('br')])])]),_v(" "),_c('li',[_c('strong',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("generateSalt()")])]),_v(":\n"),_c('ul',[_c('li',[_v("Generates a secure random salt using "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("SecureRandom")]),_v(" for use in password hashing.")])])])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"usage-in-application-2"}},[_v("Usage in Application"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#usage-in-application-2","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("PasswordManager")]),_v(" is invoked during application startup to check for an existing password file.\n"),_c('ul',[_c('li',[_v("If the file is absent, the user is prompted to create a new password.")]),_v(" "),_c('li',[_v("On subsequent starts, the user must input their original password for verification before proceeding.")])])])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"usage-2"}},[_v("Usage"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#usage-2","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs java"}},[_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("// Saving a new password on initial startup")]),_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("if")]),_v(" (PasswordManager.readPassword("),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("null")]),_v(") == "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("null")]),_v(") {\n")]),_c('span',[_v("        String newPassword = scanner.nextLine();\n")]),_c('span',[_v("        PasswordManager.savePassword(newPassword, "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("null")]),_v(");\n")]),_c('span',[_v("}\n")]),_c('span',[_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("// Verifying the password on subsequent starts")]),_v("\n")]),_c('span',[_v("String inputPassword = scanner.nextLine();\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("if")]),_v(" (PasswordManager.isPasswordCorrect(inputPassword, "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("null")]),_v(")) {\n")]),_c('span',[_v("        "),_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("// Handle correct password")]),_v("\n")]),_c('span',[_v("} "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("else")]),_v(" {\n")]),_c('span',[_v("        "),_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("// Handle wrong password")]),_v("\n")]),_c('span',[_v("}\n")])])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"example-usage-scenario-2"}},[_v("Example Usage Scenario"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#example-usage-scenario-2","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Step 1. On the initial startup of the application, the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("PasswordManager")]),_v(" checks for the existence of the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("password.txt")]),_v(" file. If the file is not found, the user is prompted to enter a new password.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Step 3. On subsequent startups, the user is prompted to input their original password. The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("PasswordManager")]),_v(" verifies the input against the stored hash and salt, granting access if the password matches.")])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"design-considerations-for-password-management-feature"}},[_v("Design Considerations for Password Management Feature"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#design-considerations-for-password-management-feature","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"core-limitations"}},[_v("Core Limitations"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#core-limitations","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('strong',[_v("Risk of Local File Exposure")]),_v(":\n"),_c('ul',[_c('li',[_v("If an attacker gains access to the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("password.txt")]),_v(" file, they could potentially compromise user accounts. This poses a fundamental risk of local file storage, as the security of the password relies on the protection of the local file system.")]),_v(" "),_c('li',[_v("For future implementation, we may consider setting a retry limit.")])])])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"documentation-logging-testing-configuration-dev-ops"}},[_c('strong',[_v("Documentation, logging, testing, configuration, dev-ops")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#documentation-logging-testing-configuration-dev-ops","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('a',{attrs:{"href":"https://ay2425s1-cs2103t-f12-4.github.io/tp/Documentation.html"}},[_v("Documentation guide")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://ay2425s1-cs2103t-f12-4.github.io/tp/Testing.html"}},[_v("Testing guide")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://ay2425s1-cs2103t-f12-4.github.io/tp/Logging.html"}},[_v("Logging guide")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://ay2425s1-cs2103t-f12-4.github.io/tp/Configuration.html"}},[_v("Configuration guide")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://ay2425s1-cs2103t-f12-4.github.io/tp/DevOps.html"}},[_v("DevOps guide")])])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"appendix-requirements"}},[_c('strong',[_v("Appendix: Requirements")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#appendix-requirements","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"product-scope"}},[_v("Product scope"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#product-scope","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Target user profile")]),_v(":")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("has a need to manage a significant number of contacts")]),_v(" "),_c('li',[_v("prefer desktop apps over other types")]),_v(" "),_c('li',[_v("can type fast")]),_v(" "),_c('li',[_v("value privacy and self-hosting")]),_v(" "),_c('li',[_v("prefers typing to mouse interactions")]),_v(" "),_c('li',[_v("is reasonably comfortable using CLI apps")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Value proposition")]),_v(": manage contacts faster than a typical mouse/GUI driven app")])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"user-stories"}},[_v("User stories"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#user-stories","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"implemented-user-stories"}},[_v("Implemented user stories"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#implemented-user-stories","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('div',{staticClass:"table-responsive"},[_c('table',{staticClass:"markbind-table table table-bordered table-striped"},[_c('thead',[_c('tr',[_c('th',[_v("Priority")]),_v(" "),_c('th',[_v("As a …​")]),_v(" "),_c('th',[_v("I want to …​")]),_v(" "),_c('th',[_v("So that I can…​")])])]),_v(" "),_c('tbody',[_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* * *")])]),_v(" "),_c('td',[_v("first-time user")]),_v(" "),_c('td',[_v("add contacts to my contact book")]),_v(" "),_c('td',[_v("store my contacts")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* * *")])]),_v(" "),_c('td',[_v("user")]),_v(" "),_c('td',[_v("add contacts to my contact book using only partial details")]),_v(" "),_c('td',[_v("store contacts that I may not have full information about")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* * *")])]),_v(" "),_c('td',[_v("user")]),_v(" "),_c('td',[_v("see all my contacts")]),_v(" "),_c('td',[_v("see and manage my contacts")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* * *")])]),_v(" "),_c('td',[_v("user")]),_v(" "),_c('td',[_v("remove contacts")]),_v(" "),_c('td',[_v("remove contacts I do not need anymore")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* *")])]),_v(" "),_c('td',[_v("user")]),_v(" "),_c('td',[_v("edit contact details")]),_v(" "),_c('td',[_v("correct errors I made when adding a contact")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* *")])]),_v(" "),_c('td',[_v("first-time user")]),_v(" "),_c('td',[_v("see sample contacts")]),_v(" "),_c('td',[_v("explore the app's features without adding real data")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* *")])]),_v(" "),_c('td',[_v("first-time user")]),_v(" "),_c('td',[_v("clear sample data and start fresh")]),_v(" "),_c('td',[_v("input my real contacts securely")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* *")])]),_v(" "),_c('td',[_v("first-time user")]),_v(" "),_c('td',[_v("view a tutorial on the app")]),_v(" "),_c('td',[_v("learn how to use the app quickly")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* *")])]),_v(" "),_c('td',[_v("first-time user")]),_v(" "),_c('td',[_v("quickly access a CLI command cheat sheet")]),_v(" "),_c('td',[_v("learn essential commands without slowing down")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* *")])]),_v(" "),_c('td',[_v("new user")]),_v(" "),_c('td',[_v("secure my contact data with a password")]),_v(" "),_c('td',[_v("feel confident that my client information is protected")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* *")])]),_v(" "),_c('td',[_v("new user")]),_v(" "),_c('td',[_v("choose to encrypt the contact data that is stored")]),_v(" "),_c('td',[_v("ensure my client information cannot be accessed from the storage location")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* *")])]),_v(" "),_c('td',[_v("new and inexperienced user")]),_v(" "),_c('td',[_v("undo actions like deletions "),_c('kbd',[_v("CTRL+Z")])]),_v(" "),_c('td',[_v("recover data quickly if I make a mistake")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* *")])]),_v(" "),_c('td',[_v("new and inexperienced user")]),_v(" "),_c('td',[_v("redo an action that was undone with undo "),_c('kbd',[_v("CTRL+SHIFT+Z")])]),_v(" "),_c('td',[_v("reapply an action if I realise I need it after undoing it")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* *")])]),_v(" "),_c('td',[_v("new and inexperienced user")]),_v(" "),_c('td',[_v("be prompted with why an invalid command is invalid")]),_v(" "),_c('td',[_v("receive immediate and specific feedback if I type an invalid command")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* *")])]),_v(" "),_c('td',[_v("returning user")]),_v(" "),_c('td',[_v("search contacts using partial details (name, email)")]),_v(" "),_c('td',[_v("find relevant contacts faster")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* *")])]),_v(" "),_c('td',[_v("user whose contacts span multiple projects")]),_v(" "),_c('td',[_v("tag contacts with a project or organisation name")]),_v(" "),_c('td',[_v("organise my contacts better")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* *")])]),_v(" "),_c('td',[_v("user")]),_v(" "),_c('td',[_v("filter contacts by project or organisation")]),_v(" "),_c('td',[_v("quickly locate clients related to specific tasks")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* *")])]),_v(" "),_c('td',[_v("experienced user")]),_v(" "),_c('td',[_v("use keyboard shortcuts to bring up the CLI")]),_v(" "),_c('td',[_v("execute commands faster")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* *")])]),_v(" "),_c('td',[_v("experienced user")]),_v(" "),_c('td',[_v("use keyboard shortcuts to manage contacts")]),_v(" "),_c('td',[_v("manage my contacts faster")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("*")])]),_v(" "),_c('td',[_v("user")]),_v(" "),_c('td',[_v("multi-select contacts for deletion")]),_v(" "),_c('td',[_v("manage my list more efficiently")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("*")])]),_v(" "),_c('td',[_v("power user")]),_v(" "),_c('td',[_v("export my contact list to JSON format")]),_v(" "),_c('td',[_v("use it in other tools or projects")])])])])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"future-user-stories"}},[_v("Future user stories"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#future-user-stories","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('div',{staticClass:"table-responsive"},[_c('table',{staticClass:"markbind-table table table-bordered table-striped"},[_c('thead',[_c('tr',[_c('th',[_v("Priority")]),_v(" "),_c('th',[_v("As a …​")]),_v(" "),_c('th',[_v("I want to …​")]),_v(" "),_c('th',[_v("So that I can…​")])])]),_v(" "),_c('tbody',[_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* *")])]),_v(" "),_c('td',[_v("new user")]),_v(" "),_c('td',[_v("import contacts from a CSV or another format (e.g. Apple's .vcf)")]),_v(" "),_c('td',[_v("use more data formats to quickly populate my address book")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* *")])]),_v(" "),_c('td',[_v("new user")]),_v(" "),_c('td',[_v("open up a settings menu")]),_v(" "),_c('td',[_v("configure keyboard shortcuts")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("*")])]),_v(" "),_c('td',[_v("returning user")]),_v(" "),_c('td',[_v("customise the app's theme")]),_v(" "),_c('td',[_v("make my user experience more personalised as I use the app more")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("*")])]),_v(" "),_c('td',[_v("frequent user")]),_v(" "),_c('td',[_v("navigate command history with arrow keys")]),_v(" "),_c('td',[_v("quickly fill the search field and modify and execute previous commands")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("*")])]),_v(" "),_c('td',[_v("programmer")]),_v(" "),_c('td',[_v("configure my shortcuts to be similar to my IDE shortcuts")]),_v(" "),_c('td',[_v("switch between my IDE and VBook more effectively")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("*")])]),_v(" "),_c('td',[_v("frequent user")]),_v(" "),_c('td',[_v("pin important contacts")]),_v(" "),_c('td',[_v("have them appear at the top of my list for easy access")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("*")])]),_v(" "),_c('td',[_v("long time user")]),_v(" "),_c('td',[_v("archive old contacts")]),_v(" "),_c('td',[_v("clean up my address book without having to remove contacts")])])])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"use-cases"}},[_v("Use cases"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#use-cases","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("(For all use cases below, the "),_c('strong',[_v("System")]),_v(" is the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("VBook")]),_v(" and the "),_c('strong',[_v("Actor")]),_v(" is the user, unless specified otherwise)")])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Use case: UC01 - Add a person")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("MSS")])])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_v("User requests to add a specific person to VBook.")])]),_v(" "),_c('li',[_c('p',[_v("VBook adds the person.")]),_v(" "),_c('p',[_v("Use case ends.")])])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Extensions")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('p',[_v("1a. One or more of the inputted parameters, or the command, is invalid.")]),_v(" "),_c('ul',[_c('li',[_c('p',[_v("1a1. VBook shows an error message.")]),_v(" "),_c('p',[_v("Use case ends.")])])])]),_v(" "),_c('li',[_c('p',[_v("1b. The name of the requested person is the same as an existing person in the address book.")]),_v(" "),_c('ul',[_c('li',[_c('p',[_v("1b1. VBook shows an error message.")]),_v(" "),_c('p',[_v("Use case ends.")])])])])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Use case: UC02 - Edit a person's details")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("MSS")])])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_v("User requests to list persons.")])]),_v(" "),_c('li',[_c('p',[_v("VBook shows a list of persons.")])]),_v(" "),_c('li',[_c('p',[_v("User requests to edit a specific person's details in the list.")])]),_v(" "),_c('li',[_c('p',[_v("VBook edits the person's details.")]),_v(" "),_c('p',[_v("Use case ends.")])])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Extensions")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('p',[_v("2a. The list is empty.")]),_v(" "),_c('p',[_v("Use case ends.")])]),_v(" "),_c('li',[_c('p',[_v("3a. The given index is invalid.")]),_v(" "),_c('ul',[_c('li',[_c('p',[_v("3a1. VBook shows an error message.")]),_v(" "),_c('p',[_v("Use case resumes at step 2.")])])])]),_v(" "),_c('li',[_c('p',[_v("3b. One or more of the inputted parameters, or the command, is invalid.")]),_v(" "),_c('ul',[_c('li',[_c('p',[_v("3b1. VBook shows an error message.")]),_v(" "),_c('p',[_v("Use case resumes at step 2.")])])])]),_v(" "),_c('li',[_c('p',[_v("3c. The name of the requested person is the same as an existing person in the address book.")]),_v(" "),_c('ul',[_c('li',[_c('p',[_v("3c1. VBook shows an error message.")]),_v(" "),_c('p',[_v("Use case resumes at step 2.")])])])])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Use case: UC03 - Remove a person")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("MSS")])])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_v("User requests to list persons.")])]),_v(" "),_c('li',[_c('p',[_v("VBook shows a list of persons.")])]),_v(" "),_c('li',[_c('p',[_v("User requests to remove a specific person in the list.")])]),_v(" "),_c('li',[_c('p',[_v("VBook removes the person.")]),_v(" "),_c('p',[_v("Use case ends.")])])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Extensions")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('p',[_v("2a. The list is empty.")]),_v(" "),_c('p',[_v("Use case ends.")])]),_v(" "),_c('li',[_c('p',[_v("3a. The given index is invalid.")]),_v(" "),_c('ul',[_c('li',[_c('p',[_v("3a1. VBook shows an error message.")]),_v(" "),_c('p',[_v("Use case resumes at step 2.")])])])])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Use case: UC04 - Find persons matching criteria")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("MSS")])])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_v("User requests to find persons in the list that match provided search criteria.")])]),_v(" "),_c('li',[_c('p',[_v("VBook  displays a list of persons that match the criteria.")]),_v(" "),_c('p',[_v("Use case ends.")])])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Extensions")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('p',[_v("1a. No persons match the search criteria.")]),_v(" "),_c('ul',[_c('li',[_c('p',[_v("1a1. VBook displays a message indicating that no persons were found.")]),_v(" "),_c('p',[_v("Use case ends.")])])])]),_v(" "),_c('li',[_c('p',[_v("1b. The command entered is invalid.")]),_v(" "),_c('ul',[_c('li',[_c('p',[_v("1b1. VBook shows an error message.")]),_v(" "),_c('p',[_v("Use case ends.")])])])])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Use case: UC05 - Export data")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("MSS")])])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_v("User requests to export data.")])]),_v(" "),_c('li',[_c('p',[_v("VBook opens the file explorer window.")])]),_v(" "),_c('li',[_c('p',[_v("User chooses the destination and name of the exported data.")])]),_v(" "),_c('li',[_c('p',[_v("VBook exports the data to the destination folder in JSON format.")]),_v(" "),_c('p',[_v("Use case ends.")])])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Extensions")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('p',[_v("2a. User closes the file explorer window without selecting a destination.")]),_v(" "),_c('p',[_v("Use case ends.")])]),_v(" "),_c('li',[_c('p',[_v("3a. The name of the exported data clashes with an existing name in the same file destination.")]),_v(" "),_c('ul',[_c('li',[_c('p',[_v("3a1. The file explorer displays an error message.")]),_v(" "),_c('p',[_v("Use case returns to step 2.")])])])]),_v(" "),_c('li',[_c('p',[_v("3b. The user enters an invalid name.")]),_v(" "),_c('ul',[_c('li',[_c('p',[_v("3b1. The file explorer displays an error message.")]),_v(" "),_c('p',[_v("Use case returns to step 2.")])])])])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Use case: UC06 - Enter password")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Preconditions:")]),_v(" User has already set a password previously.")])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("MSS")])])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_v("User starts the app.")])]),_v(" "),_c('li',[_c('p',[_v("VBook displays a window prompting the user to enter a password.")])]),_v(" "),_c('li',[_c('p',[_v("User enters the correct password.")])]),_v(" "),_c('li',[_c('p',[_v("VBook closes the password prompt window and opens the main app window.")]),_v(" "),_c('p',[_v("Use case ends.")])])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Extensions")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("2a. User enters the wrong password.\n"),_c('ul',[_c('li',[_c('p',[_v("2a1. VBook displays an error message.")]),_v(" "),_c('p',[_v("Use case returns to step 2.")])])])])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Use case: UC07 - Undo command")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Preconditions:")]),_v(" At least one command that changes the address book has been entered.")])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("MSS")])])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_v("User requests to undo the last command.")])]),_v(" "),_c('li',[_c('p',[_v("VBook undoes the last change to the data.")]),_v(" "),_c('p',[_v("Use case ends.")])])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Extensions")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('p',[_v("1a. There is no previously done add/edit/remove command found.")]),_v(" "),_c('ul',[_c('li',[_c('p',[_v("1a1. VBook displays a message that there are no more commands to undo.")]),_v(" "),_c('p',[_v("Use case ends.")])])])]),_v(" "),_c('li',[_c('p',[_v("1b. User has undone more commands than the maximum amount allowed.")]),_v(" "),_c('ul',[_c('li',[_c('p',[_v("1b1. VBook displays a message that there are no more commands to undo.")]),_v(" "),_c('p',[_v("Use case ends.")])])])])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Use case: UC08 - Redo command")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("MSS")])])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_v("User requests to redo the last undone command.")])]),_v(" "),_c('li',[_c('p',[_v("VBook redoes the last undone command.")]),_v(" "),_c('p',[_v("Use case ends.")])])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Extensions")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('p',[_v("1a. There is no previously undone command.")]),_v(" "),_c('ul',[_c('li',[_c('p',[_v("1a1. VBook displays a message that there are no more commands to redo.")]),_v(" "),_c('p',[_v("Use case ends.")])])])]),_v(" "),_c('li',[_c('p',[_v("1b. User has redone more commands than the maximum amount allowed.")]),_v(" "),_c('ul',[_c('li',[_c('p',[_v("1b1. VBook displays a message that there are no more commands to redo.")]),_v(" "),_c('p',[_v("Use case ends.")])])])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"non-functional-requirements"}},[_v("Non-Functional Requirements"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#non-functional-requirements","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_v("Should work on any "),_c('em',[_v("mainstream OS")]),_v(" as long as it has Java "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("17")]),_v(" or above installed.")]),_v(" "),_c('li',[_v("Should be able to hold up to 1000 persons without a noticeable sluggishness in performance for typical usage.")]),_v(" "),_c('li',[_v("A user with above average typing speed of 60 words per minute for regular English text should be able to accomplish most of the tasks faster using commands than using the mouse.")]),_v(" "),_c('li',[_v("Should work without any Internet connection.")]),_v(" "),_c('li',[_v("Data is stored in an encrypted file that can be edited by exporting a decrypted version of the file from the GUI.")]),_v(" "),_c('li',[_v("Commands should execute within 0.5 seconds under normal usage conditions.")]),_v(" "),_c('li',[_v("Should use strong encryption standards for data storage and secure export.")]),_v(" "),_c('li',[_v("Should support keyboard-only navigation for users with limited mouse access.")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"glossary"}},[_v("Glossary"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#glossary","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('strong',[_v("Mainstream OS")]),_v(": Windows, Linux, Unix, MacOS")]),_v(" "),_c('li',[_c('strong',[_v("Private contact detail")]),_v(": A contact detail that is not meant to be shared with others")])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"appendix-known-issues"}},[_c('strong',[_v("Appendix: Known Issues")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#appendix-known-issues","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"failing-tests-on-windows-when-run-more-than-once"}},[_v("Failing tests on Windows when run more than once"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#failing-tests-on-windows-when-run-more-than-once","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_v("In "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("EncryptionManagerTest.java")]),_v(", temporary files are created before and deleted after each test for the Encryption and Export tests. Without this cleanup, subsequent runs of "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("./gradlew test")]),_v(" will fail.")]),_v(" "),_c('li',[_v("However, on Windows machine, the test will throw a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("java.nio.file.FileSystemException")]),_v(" exception when attempting to delete the files due to the difference in how Windows processes manage files. "),_c('a',{attrs:{"href":"https://stackoverflow.com/questions/40706380/failed-to-delete-a-file-in-windows-using-java/40707174#40707174"}},[_v("(StackOverflow issue)")])]),_v(" "),_c('li',[_v("A current workaround is to check if the OS is Windows, and skip the file deletion on cleanup. This has been implemented in our tests.")]),_v(" "),_c('li',[_v("However, before starting subsequent tests, you will need to manually delete the temporary "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("*test.key")]),_v(" files and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("test")]),_v(" folder created, both in the root directory of VBook.jar.")]),_v(" "),_c('li',[_v("This issue does not exist on Mac and Linux machines.")])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"appendix-planned-enhancements"}},[_v("Appendix: Planned Enhancements"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#appendix-planned-enhancements","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('strong',[_v("Make result display text selectable:")]),_v(" The current result display window can display text but users cannot select text to copy and paste into the command box. We plan to make the window selectable so users can copy and paste in example commands to try out.")]),_v(" "),_c('li',[_c('strong',[_v("Expanded contact information:")]),_v(" The current contact list wraps around long text so the user can see the information. However, this makes the list uneven and very long remarks can make one contact unreasonably long. We plan to create a contact page per contact that contains full information about every contact, while keeping a truncated view for the main window.")]),_v(" "),_c('li',[_c('strong',[_v("Improved input validation for tags:")]),_v(" Currently, our tags have no restriction on size, which cause them to exceed the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("UI")]),_v(" space. We plan to add a maximum length for the tags to be 50 characters, as the longest English word is 45 characters.")]),_v(" "),_c('li',[_c('strong',[_v("Add input validation for find command:")]),_v(" Currently, the find command does not check if parameters like name / phone number etc. are valid before executing the find command. We plan to add input validation for the find command so that searching with an invalid parameter will fail with an error.")]),_v(" "),_c('li',[_c('strong',[_v("Add input validation for location:")]),_v(" Currently, the location field takes in any values. However, this is not specific and the user can enter in values that are clearly not locations, such as "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("0000000")]),_v(". Hence, we plan to split the location field into three distinct fields: postal code, street name, and block number. Input validation will ensure specificity, restrict ambiguity, and allow only valid special characters relevant to location data.")]),_v(" "),_c('li',[_c('strong',[_v("Add input validation for phone numbers:")]),_v(" The current phone number field does not have a strict limit on the kind of values it accepts. We plan to use regular expressions to validate phone number inputs.")]),_v(" "),_c('li',[_c('strong',[_v("Address integer overflow issues for index:")]),_v(" Currently, when a number larger than the maximum value for the data type "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("integer")]),_v(" is entered into our index field, the error message displays: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Invalid command format!")]),_v(" instead of "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("The person index provided is invalid")]),_v(". This is likely due to an integer overflow error throwing a different exception than expected. We plan to fix this by adding a check for overflow and returning the appropriate error message afterwards.")]),_v(" "),_c('li',[_c('strong',[_v("Tampering with encrypted "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("vbook.json")]),_v(" data manually:")]),_v(" Doing so would result in an exception if the program attempts to decrypt the data (for example, on "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":export")]),_v(" command). However, this exception is not handled gracefully on the Command box and instead, only shown in the console. We plan to fix this by adding a Command Exception on decryption error to inform the user that the data has been tampered with.")])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"appendix-instructions-for-manual-testing"}},[_c('strong',[_v("Appendix: Instructions for manual testing")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#appendix-instructions-for-manual-testing","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"launch"}},[_v("Launch"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#launch","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_c('strong',[_v("Initial launch:")])]),_v(" "),_c('ol',[_c('li',[_c('p',[_c('strong',[_v("Instructions:")])]),_v(" "),_c('ul',[_c('li',[_v("Download the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(".jar")]),_v(" file and copy it into an empty folder.")]),_v(" "),_c('li',[_v("Open a command terminal, change the directory ("),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("cd")]),_v(") to the folder where you saved the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("VBook.jar")]),_v(" file, and use the following command to run the application:")])]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs shell"}},[_c('span',[_v("cd path/to/vbook\n")]),_c('span',[_v("java -jar VBook.jar\n")])])])])])]),_v(" "),_c('li',[_c('p',[_c('strong',[_v("Saving window preferences:")])]),_v(" "),_c('ol',[_c('li',[_c('strong',[_v("Instructions:")]),_v(" "),_c('ul',[_c('li',[_v("Resize the window to an optimum size and move it to a different location on the screen.")]),_v(" "),_c('li',[_v("Close the window.")])])]),_v(" "),_c('li',[_c('strong',[_v("Re-launch the app:")]),_v(" "),_c('ul',[_c('li',[_v("Re-open the application by using the same command above.")])])]),_v(" "),_c('li',[_c('strong',[_v("Expected outcome:")]),_v(" The most recent window size and location should be retained.")])])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"opening-the-help-window"}},[_v("Opening the Help Window"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#opening-the-help-window","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_c('strong',[_v("Basic help command:")])]),_v(" "),_c('ol',[_c('li',[_c('strong',[_v("Test case:")]),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":help")])]),_v(" "),_c('li',[_c('strong',[_v("Expected outcome:")]),_v(" A help window should open, displaying a list of available commands with their syntax and descriptions.")])])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"adding-a-person"}},[_v("Adding a person"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#adding-a-person","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_c('strong',[_v("Adding a new person with all details:")])]),_v(" "),_c('ol',[_c('li',[_c('strong',[_v("Test case:")]),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":add -n John Doe -p 91234567 -e johndoe@example.com -l 123, Clementi Rd, #01-01, S123456 -t Friend -r Met at a wedding")])]),_v(" "),_c('li',[_c('strong',[_v("Expected outcome:")]),_v(" The new contact \"John Doe\" with all specified details should be added to the list, with a confirmation message displaying the details of the added contact.")])])]),_v(" "),_c('li',[_c('p',[_c('strong',[_v("Adding a person with only mandatory fields:")])]),_v(" "),_c('ol',[_c('li',[_c('strong',[_v("Test case:")]),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":add -n Jane Smith")])]),_v(" "),_c('li',[_c('strong',[_v("Expected outcome:")]),_v(" \"Jane Smith\" should be added to the list with only the name field populated, and all other optional fields should be left blank.")])])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"listing-all-persons"}},[_v("Listing all persons"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#listing-all-persons","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('strong',[_v("Basic list command to show all contacts:")]),_v(" "),_c('ol',[_c('li',[_c('strong',[_v("Prerequisites:")]),_v(" Ensure there are multiple contacts in the list.")]),_v(" "),_c('li',[_c('strong',[_v("Test case:")]),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":list")])]),_v(" "),_c('li',[_c('strong',[_v("Expected outcome:")]),_v(" The app should display all contacts in the list, ordered by the date that each contact was added (older contacts on top).")])])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"editing-a-person"}},[_v("Editing a person"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#editing-a-person","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_c('strong',[_v("Editing a person’s details with valid inputs:")])]),_v(" "),_c('ol',[_c('li',[_c('strong',[_v("Prerequisites:")]),_v(" Ensure a contact list with multiple persons, and select a person to edit.")]),_v(" "),_c('li',[_c('strong',[_v("Test case:")]),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":edit 1 -n Jonathan Doe -p 92345678 -e jonathan.doe@example.com -l 456, Orchard Rd, #02-02, S654321 -t Family")])]),_v(" "),_c('li',[_c('strong',[_v("Expected outcome:")]),_v(" The details of the first person in the list should be updated with the provided name, phone, email, address, and tag. A confirmation message should display the updated details.")])])]),_v(" "),_c('li',[_c('p',[_c('strong',[_v("Editing only a specific field:")])]),_v(" "),_c('ol',[_c('li',[_c('strong',[_v("Test case:")]),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":edit 1 -p 91234567")])]),_v(" "),_c('li',[_c('strong',[_v("Expected outcome:")]),_v(" The phone number of the first person should be updated to \"91234567,\" with all other fields remaining unchanged. A confirmation message should display the new contact information.")])])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"export"}},[_v("Export"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#export","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_c('strong',[_v("Successful export to a chosen location:")])]),_v(" "),_c('ol',[_c('li',[_c('strong',[_v("Prerequisites:")]),_v(" Ensure the contact list has multiple persons added.")]),_v(" "),_c('li',[_c('strong',[_v("Test case:")]),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":export")])]),_v(" "),_c('li',[_c('strong',[_v("Steps:")]),_v(" Trigger the export command. When the file explorer opens, navigate to the desired location, set a file name of \"contacts.json\", and confirm.")]),_v(" "),_c('li',[_c('strong',[_v("Expected outcome:")]),_v(" A JSON file named "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("contacts.json")]),_v(" is created in the selected location, containing the contact data. A confirmation message should display the successful export.")])])]),_v(" "),_c('li',[_c('p',[_c('strong',[_v("Export with existing file name in destination:")])]),_v(" "),_c('ol',[_c('li',[_c('strong',[_v("Prerequisites:")]),_v(" Ensure an existing file named "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("contacts.json")]),_v(" is present in the selected export location.")]),_v(" "),_c('li',[_c('strong',[_v("Test case:")]),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":export")])]),_v(" "),_c('li',[_c('strong',[_v("Steps:")]),_v(" Trigger the export command, select the same destination and enter the name "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("contacts.json")]),_v(" for the export.")]),_v(" "),_c('li',[_c('strong',[_v("Expected outcome:")]),_v(" A prompt should appear asking for confirmation to overwrite the existing file. Confirming should replace the existing file with the new export, while canceling should leave the file unchanged.")])])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"undo"}},[_v("Undo"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#undo","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_c('strong',[_v("Undo a recent add command:")])]),_v(" "),_c('ol',[_c('li',[_c('strong',[_v("Test case:")]),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":add -n John Doe -p 91234567 -e johndoe@example.com")]),_v(" followed by "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":undo")])]),_v(" "),_c('li',[_c('strong',[_v("Expected outcome:")]),_v(" The new contact \"John Doe\" should be removed from the list, and a confirmation message should display indicating the undo operation was successful.")])])]),_v(" "),_c('li',[_c('p',[_c('strong',[_v("Undo a recent edit command:")])]),_v(" "),_c('ol',[_c('li',[_c('strong',[_v("Prerequisites:")]),_v(" Ensure at least one contact is in the list.")]),_v(" "),_c('li',[_c('strong',[_v("Test case:")]),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":edit 1 -p 92345678")]),_v(" followed by "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":undo")])]),_v(" "),_c('li',[_c('strong',[_v("Expected outcome:")]),_v(" The phone number of the contact at index 1 should revert to its previous value, with a message confirming the undo operation.")])])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"redo"}},[_v("Redo"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#redo","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_c('strong',[_v("Redo a recent undo of an add command:")])]),_v(" "),_c('ol',[_c('li',[_c('strong',[_v("Prerequisites:")]),_v(" Add a new contact and then undo the action.")]),_v(" "),_c('li',[_c('strong',[_v("Test case:")]),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":add -n John Doe -p 91234567 -e johndoe@example.com")]),_v(", then "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":undo")]),_v(", followed by "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":redo")])]),_v(" "),_c('li',[_c('strong',[_v("Expected outcome:")]),_v(" The contact \"John Doe\" should reappear in the list after the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":redo")]),_v(" command, with a confirmation message indicating the redo was successful.")])])]),_v(" "),_c('li',[_c('p',[_c('strong',[_v("Redo a recent undo of an edit command:")])]),_v(" "),_c('ol',[_c('li',[_c('strong',[_v("Prerequisites:")]),_v(" Edit a contact’s details and then undo the edit.")]),_v(" "),_c('li',[_c('strong',[_v("Test case:")]),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":edit 1 -p 92345678")]),_v(", then "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":undo")]),_v(", followed by "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":redo")])]),_v(" "),_c('li',[_c('strong',[_v("Expected outcome:")]),_v(" The phone number of the contact at index 1 should be updated to \"92345678\" again after the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":redo")]),_v(" command, with a confirmation message.")])])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"find"}},[_v("Find"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#find","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_c('strong',[_v("Find by full name:")])]),_v(" "),_c('ol',[_c('li',[_c('strong',[_v("Prerequisites:")]),_v(" Ensure the contact list contains a person named \"John Doe.\"")]),_v(" "),_c('li',[_c('strong',[_v("Test case:")]),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":find -n John Doe")])]),_v(" "),_c('li',[_c('strong',[_v("Expected outcome:")]),_v(" The contact \"John Doe\" should be displayed in the search results, with a confirmation message indicating the number of matches found.")])])]),_v(" "),_c('li',[_c('p',[_c('strong',[_v("Find by partial name:")])]),_v(" "),_c('ol',[_c('li',[_c('strong',[_v("Prerequisites:")]),_v(" Ensure the contact list has multiple entries with names containing \"John\" (e.g., \"John Doe,\" \"Johnny Appleseed\").")]),_v(" "),_c('li',[_c('strong',[_v("Test case:")]),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":find -n John")])]),_v(" "),_c('li',[_c('strong',[_v("Expected outcome:")]),_v(" All contacts with \"John\" in their names should be displayed in the search results, showing all relevant entries.")])])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"removing-a-person"}},[_v("Removing a person"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#removing-a-person","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_c('strong',[_v("Removing the first person in the list:")])]),_v(" "),_c('ol',[_c('li',[_c('strong',[_v("Prerequisites:")]),_v(" List all persons using the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":list")]),_v(" command. Multiple persons are in the list.")]),_v(" "),_c('li',[_c('strong',[_v("Test case:")]),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":remove -i 1")])]),_v(" "),_c('li',[_c('strong',[_v("Expected outcome:")]),_v(" The first contact is removed from the list. A confirmation message displays the details of the removed contact.")])])]),_v(" "),_c('li',[_c('p',[_c('strong',[_v("Attempting to remove a person with an invalid index (zero):")])]),_v(" "),_c('ol',[_c('li',[_c('strong',[_v("Prerequisites:")]),_v(" Ensure the contact list has entries.")]),_v(" "),_c('li',[_c('strong',[_v("Test case:")]),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":remove -i 0")])]),_v(" "),_c('li',[_c('strong',[_v("Expected outcome:")]),_v(" No person is removed. An error message displays, indicating an invalid command format.")])])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"clearing-all-persons"}},[_v("Clearing all Persons"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#clearing-all-persons","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_c('strong',[_v("Basic clear command to remove all contacts:")])]),_v(" "),_c('ol',[_c('li',[_c('strong',[_v("Prerequisites:")]),_v(" Ensure there are multiple contacts in the list.")]),_v(" "),_c('li',[_c('strong',[_v("Test case:")]),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":clear")])]),_v(" "),_c('li',[_c('strong',[_v("Expected outcome:")]),_v(" All contacts should be removed from the list, and a confirmation message should appear, indicating that the contact list has been cleared.")])])]),_v(" "),_c('li',[_c('p',[_c('strong',[_v("Clear command when the contact list is already empty:")])]),_v(" "),_c('ol',[_c('li',[_c('strong',[_v("Prerequisites:")]),_v(" Ensure the contact list is empty.")]),_v(" "),_c('li',[_c('strong',[_v("Test case:")]),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":clear")])]),_v(" "),_c('li',[_c('strong',[_v("Expected outcome:")]),_v(" No errors should occur, the display should remain unchanged, and a confirmation message should appear, indicating that the contact list has been cleared.")])])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"quit-command"}},[_v("Quit Command"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#quit-command","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_c('strong',[_v("Basic quit command to exit the application:")])]),_v(" "),_c('ol',[_c('li',[_c('strong',[_v("Prerequisites:")]),_v(" Ensure the application is running.")]),_v(" "),_c('li',[_c('strong',[_v("Test case:")]),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":quit")])]),_v(" "),_c('li',[_c('strong',[_v("Expected outcome:")]),_v(" The application should close.")])])]),_v(" "),_c('li',[_c('p',[_c('strong',[_v("Quit command immediately after startup:")])]),_v(" "),_c('ol',[_c('li',[_c('strong',[_v("Prerequisites:")]),_v(" Open the application with no modifications made to the contact list.")]),_v(" "),_c('li',[_c('strong',[_v("Test case:")]),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":quit")])]),_v(" "),_c('li',[_c('strong',[_v("Expected outcome:")]),_v(" The application should close immediately without any prompt.")])])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"saving-data"}},[_v("Saving data"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#saving-data","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_c('strong',[_v("Dealing with missing data files")])]),_v(" "),_c('ol',[_c('li',[_c('strong',[_v("Prerequisites:")]),_v(" Ensure there is an existing "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("data/vbook.json")]),_v(" file in the home folder of the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(".jar")]),_v(" file.")]),_v(" "),_c('li',[_c('strong',[_v("Test case:")]),_v(" Delete the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("data/vbook.json")]),_v(" file, close the address book, and then open it again.")]),_v(" "),_c('li',[_c('strong',[_v("Expected outcome:")]),_v(" The data should be replaced with the sample data that appears when the app is first opened.")])])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"password-prompt"}},[_v("Password Prompt"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#password-prompt","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_c('strong',[_v("Initial fresh startup - Cancelling prompt:")])]),_v(" "),_c('ol',[_c('li',[_c('strong',[_v("Prerequisites:")]),_v(" Ensure there is no "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("password.txt")]),_v(" file in the root directory of the project.")]),_v(" "),_c('li',[_c('strong',[_v("Test case:")]),_v(" Start the program without a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("password.txt")]),_v(" file. Press \"Cancel\" or close the password prompt using the cross button.")]),_v(" "),_c('li',[_c('strong',[_v("Expected outcome")]),_v(": The program exits gracefully. No "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("password.txt")]),_v(" file is created.")])])]),_v(" "),_c('li',[_c('p',[_c('strong',[_v("Initial fresh startup - Creating a new password")])]),_v(" "),_c('ol',[_c('li',[_c('strong',[_v("Prerequisites:")]),_v(" Ensure there is no "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("password.txt")]),_v(" file in the root directory of the project.")]),_v(" "),_c('li',[_c('strong',[_v("Action:")]),_v(" Type a new password in the password prompt and confirm.")]),_v(" "),_c('li',[_c('strong',[_v("Expected outcome:")]),_v(" The main GUI is displayed. A new "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("password.txt")]),_v(" file is created in the root directory containing the salted hash of the entered password.")])])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"encryption-manager"}},[_v("Encryption Manager"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#encryption-manager","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_c('strong',[_v("Initial fresh startup")])]),_v(" "),_c('ol',[_c('li',[_c('p',[_c('strong',[_v("Prerequisites:")]),_v(" Ensure there is no "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("data/vbook.json")]),_v(" file or "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("vbook.jks")]),_v(" file in the root directory.")])]),_v(" "),_c('li',[_c('p',[_c('strong',[_v("Test case:")]),_v(" Start the program and invoke a GUI command (e.g., "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(":add")]),_v(").")])]),_v(" "),_c('li',[_c('p',[_c('strong',[_v("Action:")]),_v(" Add a new entry using the GUI command.")])]),_v(" "),_c('li',[_c('p',[_c('strong',[_v("Expected outcome:")])]),_v(" "),_c('ul',[_c('li',[_v("A new "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("vbook.jks")]),_v(" file is created in the root directory, containing the encryption key.")]),_v(" "),_c('li',[_v("A "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("data/vbook.json")]),_v(" file is created. Attempting to open the file from the file explorer shows unreadable binary data.")]),_v(" "),_c('li',[_v("The GUI displays the data correctly.")])])])])]),_v(" "),_c('li',[_c('p',[_c('strong',[_v("Subsequent loads with existing "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("vbook.jks")]),_v(" and encrypted "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("vbook.json")])])]),_v(" "),_c('ol',[_c('li',[_c('p',[_c('strong',[_v("Prerequisites:")]),_v(" Ensure a valid "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("vbook.jks")]),_v(" file exists in the root directory and an encrypted "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("data/vbook.json")]),_v(" file is present.")])]),_v(" "),_c('li',[_c('p',[_c('strong',[_v("Test case:")]),_v(" Start the program.")])]),_v(" "),_c('li',[_c('p',[_c('strong',[_v("Action:")]),_v(" Launch the program.")])]),_v(" "),_c('li',[_c('p',[_c('strong',[_v("Expected outcome:")])]),_v(" "),_c('ul',[_c('li',[_v("The program reads the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("data/vbook.json")]),_v(" file using the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("vbook.jks")]),_v(" encryption key.")]),_v(" "),_c('li',[_v("The GUI displays the data correctly.")]),_v(" "),_c('li',[_v("Any GUI commands modify the encrypted "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("data/vbook.json")]),_v(" file, ensuring the file remains binary and unreadable outside the program.")])])])])])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"appendix-effort"}},[_v("Appendix: Effort"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#appendix-effort","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("While we didn't expand the fields much from AB3, certain features like the Export feature took us a lot of time to debug, especially given known bugs with the Windows system (see "),_c('a',{attrs:{"href":"#failing-tests-on-windows-when-run-more-than-once"}},[_v("failing tests on Windows when run more than once")]),_v("). The password prompt with proper salted hashing and encryption features with standard encryption algorithms also add an additional layer of security.")])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('small',[_v("["),_c('span',[_c('strong',[_v("Powered by")])]),_v(" "),_c('img',{attrs:{"src":"https://markbind.org/favicon.ico","width":"30"}}),_v(" "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 5.5.3")]),_v(", generated on Tue, 12 Nov 2024, 4:44:29 GMT+8]")])])])}
}];
  