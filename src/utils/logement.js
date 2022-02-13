class Host {
    constructor(name, picture) {
        this.name = null ?? name
        this.picture = null ?? picture
    }
}

class Logement {

    constructor(id, title, cover, pictures, description, host, rating, location, equipements, tags) {
        this.id = null ?? id
        this.title = null ?? title
        this.cover = null ?? cover
        this.pictures = null ?? pictures
        this.description = null ?? description
        this.host = null ?? Object.assign({}, {name:host.name, picture: host.picture})
        this.rating = null ?? rating
        this.location = null ?? location
        this.equipements = null ?? equipements
        this.tags = null ?? tags
    }
}

export { Host, Logement }