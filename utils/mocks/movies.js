const moviesMock = [
  { 
    "id": "a08921b2-57c2-4430-aeed-8ad37c38fec8", 
    "title": "Objectified", 
    "year": 1997, 
    "cover": "http://dummyimage.com/149x108.png/dddddd/000000", 
    "description": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.", 
    "duration": 1927, 
    "contentRating": "NC-17", 
    "source": "http://gravatar.com/et/eros/vestibulum/ac/est.html?tortor=nisl&quis=venenatis&turpis=lacinia&sed=aenean&ante=sit&vivamus=amet&tortor=justo&duis=morbi&mattis=ut&egestas=odio&metus=cras&aenean=mi&fermentum=pede&donec=malesuada&ut=in&mauris=imperdiet&eget=et&massa=commodo&tempor=vulputate&convallis=justo&nulla=in&neque=blandit&libero=ultrices&convallis=enim&eget=lorem&eleifend=ipsum&luctus=dolor&ultricies=sit&eu=amet&nibh=consectetuer&quisque=adipiscing&id=elit&justo=proin&sit=interdum&amet=mauris&sapien=non&dignissim=ligula&vestibulum=pellentesque&vestibulum=ultrices&ante=phasellus&ipsum=id&primis=sapien&in=in&faucibus=sapien&orci=iaculis&luctus=congue&et=vivamus&ultrices=metus&posuere=arcu&cubilia=adipiscing&curae=molestie&nulla=hendrerit&dapibus=at&dolor=vulputate&vel=vitae&est=nisl&donec=aenean&odio=lectus&justo=pellentesque&sollicitudin=eget&ut=nunc&suscipit=donec", 
    "tags": ["Documentary"] 
  },
  { 
    "id": "42f6aca5-a898-4945-acbe-e4764d72e38d", 
    "title": "Cars", 
    "year": 2003, 
    "cover": "http://dummyimage.com/135x137.png/dddddd/000000", 
    "description": "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.", 
    "duration": 1972, "contentRating": "PG-13", 
    "source": "https://psu.edu/libero/ut/massa/volutpat/convallis/morbi.js?cursus=platea&urna=dictumst&ut=morbi&tellus=vestibulum&nulla=velit&ut=id&erat=pretium&id=iaculis&mauris=diam&vulputate=erat&elementum=fermentum&nullam=justo&varius=nec&nulla=condimentum&facilisi=neque&cras=sapien&non=placerat&velit=ante&nec=nulla&nisi=justo&vulputate=aliquam&nonummy=quis&maecenas=turpis&tincidunt=eget&lacus=elit&at=sodales&velit=scelerisque&vivamus=mauris&vel=sit&nulla=amet&eget=eros&eros=suspendisse&elementum=accumsan&pellentesque=tortor&quisque=quis&porta=turpis&volutpat=sed&erat=ante&quisque=vivamus&erat=tortor&eros=duis&viverra=mattis&eget=egestas&congue=metus&eget=aenean&semper=fermentum&rutrum=donec&nulla=ut&nunc=mauris&purus=eget&phasellus=massa&in=tempor&felis=convallis&donec=nulla&semper=neque&sapien=libero&a=convallis&libero=eget&nam=eleifend&dui=luctus&proin=ultricies&leo=eu&odio=nibh&porttitor=quisque&id=id&consequat=justo&in=sit&consequat=amet", 
    "tags": ["Animation", "Children", "Comedy"]
  },
  { 
    "id": "cb292e96-ba89-4969-97ad-f50aaa97f3eb", 
    "title": "Drumline", 
    "year": 1989, 
    "cover": "http://dummyimage.com/245x195.png/dddddd/000000", 
    "description": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.", 
    "duration": 2001, 
    "contentRating": "R", 
    "source": "http://examiner.com/iaculis/congue/vivamus/metus/arcu/adipiscing/molestie.jpg?etiam=sit&justo=amet&etiam=erat&pretium=nulla&iaculis=tempus&justo=vivamus&in=in&hac=felis&habitasse=eu&platea=sapien&dictumst=cursus&etiam=vestibulum&faucibus=proin&cursus=eu&urna=mi&ut=nulla&tellus=ac&nulla=enim&ut=in&erat=tempor&id=turpis&mauris=nec&vulputate=euismod&elementum=scelerisque&nullam=quam&varius=turpis", 
    "tags": ["Comedy", "Drama", "Musical", "Romance"] 
  },
  { 
    "id": "afa672b6-0463-4879-a618-bf47ea3dc28e", 
    "title": "Big Trail, The", 
    "year": 2010, 
    "cover": "http://dummyimage.com/135x121.png/dddddd/000000", 
    "description": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.", 
    "duration": 1907, 
    "contentRating": "PG", 
    "source": "https://devhub.com/sollicitudin.aspx?libero=nunc&convallis=proin&eget=at&eleifend=turpis&luctus=a&ultricies=pede&eu=posuere&nibh=nonummy&quisque=integer&id=non&justo=velit&sit=donec&amet=diam&sapien=neque&dignissim=vestibulum&vestibulum=eget&vestibulum=vulputate&ante=ut&ipsum=ultrices&primis=vel&in=augue&faucibus=vestibulum&orci=ante&luctus=ipsum&et=primis&ultrices=in&posuere=faucibus&cubilia=orci&curae=luctus&nulla=et&dapibus=ultrices&dolor=posuere&vel=cubilia&est=curae&donec=donec&odio=pharetra&justo=magna&sollicitudin=vestibulum&ut=aliquet&suscipit=ultrices&a=erat&feugiat=tortor&et=sollicitudin&eros=mi&vestibulum=sit&ac=amet&est=lobortis&lacinia=sapien&nisi=sapien&venenatis=non&tristique=mi&fusce=integer&congue=ac&diam=neque&id=duis&ornare=bibendum&imperdiet=morbi&sapien=non&urna=quam&pretium=nec&nisl=dui&ut=luctus&volutpat=rutrum&sapien=nulla&arcu=tellus&sed=in&augue=sagittis&aliquam=dui&erat=vel&volutpat=nisl&in=duis&congue=ac&etiam=nibh&justo=fusce&etiam=lacus&pretium=purus&iaculis=aliquet&justo=at&in=feugiat&hac=non&habitasse=pretium&platea=quis&dictumst=lectus&etiam=suspendisse&faucibus=potenti&cursus=in&urna=eleifend&ut=quam", 
    "tags": ["Adventure", "Romance", "Western"] 
  },
  { 
    "id": "b4af4efd-b935-4ce2-b702-a83d3b679bde", 
    "title": "Revolution", 
    "year": 2008, 
    "cover": "http://dummyimage.com/184x232.png/dddddd/000000", 
    "description": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.", 
    "duration": 2011, 
    "contentRating": "NC-17", 
    "source": "https://google.cn/blandit/nam/nulla/integer/pede.html?in=purus", 
    "tags": ["Adventure", "Drama", "War"] 
  },
  { 
    "id": "cf84aca0-07c5-427d-b12b-7959c8e0c091", 
    "title": "Captain January", 
    "year": 2009, 
    "cover": "http://dummyimage.com/192x215.jpg/5fa2dd/ffffff", 
    "description": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.", 
    "duration": 2032, 
    "contentRating": "G", 
    "source": "https://ca.gov/sit/amet/consectetuer/adipiscing/elit/proin/interdum.js?congue=nec&risus=euismod&semper=scelerisque&porta=quam&volutpat=turpis&quam=adipiscing&pede=lorem&lobortis=vitae&ligula=mattis&sit=nibh&amet=ligula&eleifend=nec&pede=sem&libero=duis&quis=aliquam&orci=convallis&nullam=nunc&molestie=proin&nibh=at&in=turpis&lectus=a&pellentesque=pede&at=posuere&nulla=nonummy&suspendisse=integer&potenti=non&cras=velit&in=donec&purus=diam&eu=neque&magna=vestibulum&vulputate=eget&luctus=vulputate&cum=ut&sociis=ultrices&natoque=vel&penatibus=augue&et=vestibulum&magnis=ante&dis=ipsum&parturient=primis&montes=in&nascetur=faucibus&ridiculus=orci&mus=luctus&vivamus=et&vestibulum=ultrices&sagittis=posuere&sapien=cubilia&cum=curae&sociis=donec&natoque=pharetra&penatibus=magna&et=vestibulum&magnis=aliquet&dis=ultrices&parturient=erat&montes=tortor&nascetur=sollicitudin&ridiculus=mi&mus=sit&etiam=amet&vel=lobortis&augue=sapien&vestibulum=sapien&rutrum=non&rutrum=mi&neque=integer&aenean=ac&auctor=neque&gravida=duis&sem=bibendum&praesent=morbi&id=non&massa=quam", 
    "tags": ["Drama"] 
  },
  { 
    "id": "42f3fda2-8a61-44c7-9f94-23d06bc35f80", 
    "title": "Price of Glory", 
    "year": 1990, 
    "cover": "http://dummyimage.com/104x100.bmp/dddddd/000000", 
    "description": "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.", 
    "duration": 1982, 
    "contentRating": "NC-17", 
    "source": "https://nydailynews.com/primis.jpg?tristique=diam&est=id&et=ornare&tempus=imperdiet&semper=sapien&est=urna&quam=pretium&pharetra=nisl&magna=ut&ac=volutpat&consequat=sapien&metus=arcu&sapien=sed&ut=augue&nunc=aliquam&vestibulum=erat&ante=volutpat&ipsum=in&primis=congue&in=etiam&faucibus=justo&orci=etiam&luctus=pretium&et=iaculis&ultrices=justo&posuere=in&cubilia=hac&curae=habitasse&mauris=platea&viverra=dictumst&diam=etiam&vitae=faucibus&quam=cursus&suspendisse=urna&potenti=ut&nullam=tellus&porttitor=nulla&lacus=ut&at=erat&turpis=id&donec=mauris&posuere=vulputate&metus=elementum&vitae=nullam&ipsum=varius&aliquam=nulla&non=facilisi&mauris=cras&morbi=non&non=velit&lectus=nec&aliquam=nisi&sit=vulputate&amet=nonummy&diam=maecenas&in=tincidunt&magna=lacus&bibendum=at", 
    "tags": ["Drama"] 
  },
  { 
    "id": "cdfc042b-625a-4447-bcc1-fcf10a3c86d7", 
    "title": "East Side, West Side", 
    "year": 2007, 
    "cover": "http://dummyimage.com/235x139.bmp/cc0000/ffffff", 
    "description": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.", "duration": 2020, 
    "contentRating": "PG", 
    "source": "http://artisteer.com/erat/vestibulum/sed.js?rhoncus=ipsum&sed=dolor&vestibulum=sit&sit=amet&amet=consectetuer&cursus=adipiscing&id=elit&turpis=proin&integer=interdum&aliquet=mauris&massa=non&id=ligula&lobortis=pellentesque&convallis=ultrices&tortor=phasellus&risus=id&dapibus=sapien&augue=in&vel=sapien&accumsan=iaculis&tellus=congue&nisi=vivamus&eu=metus&orci=arcu&mauris=adipiscing&lacinia=molestie&sapien=hendrerit&quis=at&libero=vulputate&nullam=vitae&sit=nisl&amet=aenean&turpis=lectus&elementum=pellentesque&ligula=eget&vehicula=nunc&consequat=donec&morbi=quis&a=orci&ipsum=eget&integer=orci&a=vehicula&nibh=condimentum&in=curabitur&quis=in&justo=libero&maecenas=ut&rhoncus=massa&aliquam=volutpat&lacus=convallis&morbi=morbi&quis=odio&tortor=odio&id=elementum&nulla=eu", 
    "tags": ["Crime", "Drama", "Romance"] 
  },
  { 
    "id": "b1006e69-fc60-4613-84fc-1ca3513442f8", 
    "title": "When Marnie Was There", 
    "year": 2007, 
    "cover": "http://dummyimage.com/199x238.bmp/dddddd/000000", 
    "description": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.", 
    "duration": 1934, 
    "contentRating": "PG", 
    "source": "http://webmd.com/sit/amet/erat/nulla/tempus/vivamus.xml?in=nunc&purus=rhoncus&eu=dui&magna=vel&vulputate=sem&luctus=sed&cum=sagittis&sociis=nam&natoque=congue&penatibus=risus&et=semper&magnis=porta&dis=volutpat&parturient=quam&montes=pede&nascetur=lobortis&ridiculus=ligula&mus=sit&vivamus=amet&vestibulum=eleifend&sagittis=pede&sapien=libero&cum=quis&sociis=orci&natoque=nullam&penatibus=molestie&et=nibh&magnis=in&dis=lectus&parturient=pellentesque&montes=at&nascetur=nulla&ridiculus=suspendisse&mus=potenti&etiam=cras&vel=in&augue=purus&vestibulum=eu&rutrum=magna&rutrum=vulputate&neque=luctus", 
    "tags": ["Animation", "Drama"] 
  },
  { 
    "id": "4f643054-0c22-4866-9df4-032e29f7b79e", 
    "title": "State of the Union", 
    "year": 1999, 
    "cover": "http://dummyimage.com/124x248.jpg/dddddd/000000", 
    "description": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.", "duration": 1971, 
    "contentRating": "R", 
    "source": "http://senate.gov/odio/donec/vitae/nisi/nam/ultrices.json?lacus=rhoncus&morbi=aliquam&quis=lacus&tortor=morbi&id=quis&nulla=tortor&ultrices=id&aliquet=nulla&maecenas=ultrices&leo=aliquet&odio=maecenas&condimentum=leo", 
    "tags": ["Comedy", "Drama"] 
  },
]
/**
 * Funcion que filtra el array moviesMock por medio de sus tags
 */
function filteredMoviesMock(tag){
  return moviesMock.filter(movie => movie.tags.includes(tag))
}

/** Mock de servicios */
class MoviesServiceMock {
  /**
   * Mock del servicio create movies que 
   */
  async getMovies() {
    return Promise.resolve(moviesMock)
  }

  /**
   * Metodo que es respuesta de haber hecho la peticion get en movies
   */
  async createMovie() {
    return Promise.resolve(moviesMock[0])
  }
}

module.exports = { 
  moviesMock,
  filteredMoviesMock,
  MoviesServiceMock
}

