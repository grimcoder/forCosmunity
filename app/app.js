var m = require("mithril")

var Posts = require("./Posts")

var UserBox = {
    view: function (vnode) {

        //<div class="box fl pa1 bg-black ba bw3 br4 ">
        //    <div class="element " >
        //        <div style="background:url(https://sandbox-cdn.cosmunity.com/59597afba370ad00586a14ad/59597b15a370ad00586a1a5d-250-508.png) no-repeat top right;background-size: cover;" class="elementLow bg-red">
        //            <img src="img/buttonOrange.png" class="button"  />
        //            <div class="white username f2-l">Username</div>
        //        </div>
        //    </div>
        //</div>


        return m("div", {class: 'box fl pa1 bg-black ba bw3 br4'},
            [
                m("div", {
                    style: 'background:url(' + vnode.attrs.url + ') no-repeat top right;background-size: cover;',
                    class: 'elementLow bg-red'
                }, [
                    m("img", {src: 'img/buttonOrange.png', class: 'button'}),
                    m("div", {class: 'white username f5-m'}, vnode.attrs.username.substr(0, 12))
                ])
            ]
        )
    }
}

var Main = {
    init: Posts.loadList(),
    view: function () {
        var posts = Posts.list;
        var owners = posts.slice(0, 2);
        return  m('div', [
            m("div", owners.map(function (user) {
                return [
                    m(UserBox, {url: user.owner.profilePhoto.sizes[0].url, username: user.owner.username}),
                ]
            })),
            m('div', {class: 'smallbox fl ba br4 '}, [
                m('div', {class: 'element'})
            ])])
    }
}

m.mount(document.body, Main)


