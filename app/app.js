var m = require("mithril")

var Posts = require("./Posts")

var UserBox = {
    view: function (vnode) {
        return m("span", {class: 'fl w-45 pa2 black '},
            [ m("img", {src: vnode.attrs.url } )]
        )}
}

var Main = {
    init: Posts.loadList(),
    view: function() {

        var posts = Posts.list;
        var users = ['59597afba370ad00586a14ad','59597b08a370ad00586a1613'] // users ids that have userpics
        var owners = users.map((u)=>{
            var tmp = posts.filter((p)=>{return p.ownerId == u});
            return tmp.length > 0 ? tmp[0] : undefined;

        }).filter((i)=>{return i});

        return  m(".user-list", owners.map(function(user) {
            return  [
                m(UserBox, {url: user.owner.profilePhoto.sizes[0].url, username: user.owner.username})
            ]
        }))
    }
}

m.mount(document.body, Main)


