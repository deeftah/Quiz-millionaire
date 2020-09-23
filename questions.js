class Questions {
  constructor(text,options,answer,points) {
    this.text = text;
    this.options = options;
    this.answer = answer;
    this.points = points;
  }
}

let milioner = [
  new Questions('Uprevodu na srpski, internacionalno je...',[`<span class="ponOdg">dobrostojece</span>`,'<span class="ponOdg">medjunarodno</span>','<span class="ponOdg">niskoletece</span>','<span class="ponOdg">maloprodajno</span>'],'medjunarodno',15),
  new Questions('Kakva obavezno mora biti mini suknja?',[`<span class="ponOdg">zelena</span>`,'<span class="ponOdg">duga</span>','<span class="ponOdg">kratka</span>','<span class="ponOdg">vunena</span>'],'kratka',25),
  new Questions('Gledano iz Srbije, Skandinavija je?',[`<span class="ponOdg">na jugu</span>`,'<span class="ponOdg">pod zemljom</span>','<span class="ponOdg">na severu</span>','<span class="ponOdg">pod morem</span>'],'na severu',35),
  new Questions('Poznata izreka veli - Proveo se kao bos...',[`<span class="ponOdg">na krovu</span>`,'<span class="ponOdg">u vojsci</span>','<span class="ponOdg">bez sokni</span>','<span class="ponOdg">po trnju</span>'],'po trnju',45),
  new Questions('Koji naucnik je bio osnivac psihoanalize?',[`<span class="ponOdg">Nils Bor</span>`,'<span class="ponOdg">Carls Darvin</span>','<span class="ponOdg">Sigmund Frojd</span>','<span class="ponOdg">Luj Paster</span>'],'Sigmund Frojd',55),
  new Questions('Internet nam je omogucio da cetujemo, ili, u prevodu, da...',[`<span class="ponOdg">cestitamo</span>`,'<span class="ponOdg">cavrljamo</span>','<span class="ponOdg">cerupamo</span>','<span class="ponOdg">ceprkamo</span>'],'cavrljamo',75),
  new Questions('Prema prici poznate serije stripova i filmova, Supermen postaje slabic u dodiru sa...',[`<span class="ponOdg">zlatom</span>`,'<span class="ponOdg">kriptonitom</span>','<span class="ponOdg">vodom</span>','<span class="ponOdg">uranijumom</span>'],'kriptonitom',95),
  new Questions('Na kojoj reci lezi grad Pirot?',[`<span class="ponOdg">Timok</span>`,'<span class="ponOdg">Juzna Morava</span>','<span class="ponOdg">Nisava</span>','<span class="ponOdg">Zapadna Morava</span>'],'Nisava',115),
  new Questions('Stara i vrlo popularna sorta jabuka je...',[`<span class="ponOdg">viljamovka</span>`,'<span class="ponOdg">budimka</span>','<span class="ponOdg">nektarina</span>','<span class="ponOdg">pozegaca</span>'],'budimka',135),
  new Questions('Otoskop prvenstveno sluzi za pregled...',[`<span class="ponOdg">oka</span>`,'<span class="ponOdg">uha</span>','<span class="ponOdg">grla</span>','<span class="ponOdg">pluca</span>'],'uha',155),
  new Questions('Igrao je kosarku za "Mamuze" iz San Antonija:',[`<span class="ponOdg">Zarko Paspalj</span>`,'<span class="ponOdg">Sasa Djordjevic</span>','<span class="ponOdg">Zeljko Rebraca</span>','<span class="ponOdg">Ratko Varda</span>'],'Zarko Paspalj',200),
  new Questions('Italijanski privrednik i politicar Silvio Berluskoni vlasnik je koje kompanije?',[`<span class="ponOdg">Pirelli</span>`,'<span class="ponOdg">Indesit</span>','<span class="ponOdg">Intesa Sanpaolo</span>','<span class="ponOdg">Mediaset</span>'],'Mediaset',250),
  new Questions('Medju 22 karte velike arkane tarota nalazi se i ona ciji je naziv...',[`<span class="ponOdg">mlada zora</span>`,'<span class="ponOdg">zlatni presto</span>','<span class="ponOdg">bojna kola</span>','<span class="ponOdg">stara voda</span>'],'bojna kola',300),
  new Questions('Koji rimski istoricar je u delu Anali, izmedju ostalog opisao,kako je car Neron zapalio Rim?',[`<span class="ponOdg">Mucijan</span>`,'<span class="ponOdg">Zosim</span>','<span class="ponOdg">Tacit</span>','<span class="ponOdg">Plutarh</span>'],'Tacit',400),
  new Questions('Koji od navedenih holivudskih glumaca je najcesce tumacio likove koji ne docekaju kraj filma?',['<span class="ponOdg">Dzek Nikolson</span>','<span class="ponOdg">Robert de Niro</span>','<span class="ponOdg">Dastin Hofman</span>','<span class="ponOdg">Al Pacino</span>'],'Robert de Niro',500)
];
