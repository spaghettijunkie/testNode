module.exports = class Member {
    member() {
        this.id = -1;
        this.name = "N/A"
    }

    member(id, name) {
        this.id = id;
        this.name = name;
    }
}