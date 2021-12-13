(this.webpackJsonpmyfirstreactapp=this.webpackJsonpmyfirstreactapp||[]).push([[0],[,,,,,,,,,,,,,,function(t,e,a){},function(t,e,a){},function(t,e,a){},,function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){"use strict";a.r(e);var n=a(1),s=a.n(n),c=a(8),i=a.n(c),r=(a(14),a(9)),o=a(3),l=a(4),h=a(2),u=a(6),d=a(5),p=(a(15),"https://accounts.spotify.com/authorize?response_type=token&scope=playlist-modify-public&client_id=".concat("366387033df94efb9fc7466882437dcd","&redirect_uri=").concat("http://marunouchisrv.surge.sh/")),m=void 0,j=void 0,b={getAccessToken:function(){if(m)return m;var t=window.location.href.match(/access_token=([^&]*)/),e=window.location.href.match(/expires_in=([^&]*)/);t&&e?(m=t[1],j=e[1],window.setTimeout((function(){return m=""}),1e3*j),window.history.pushState("Access Token",null,"/")):window.location=p},search:function(t){var e=b.getAccessToken();return fetch("https://api.spotify.com/v1/search?type=track&q=".concat(t),{headers:{Authorization:"Bearer ".concat(e)}}).then((function(t){if(t.ok)return t.json();console.log("API request failed")})).then((function(t){return t.tracks?t.tracks.items.map((function(t){return{id:t.id,name:t.name,artist:t.artists[0].name,album:t.album.name,uri:t.uri,cover:t.album.images[2].url,preview:t.preview_url}})):[]}))},savePlaylist:function(t,e){if(t&&e&&0!==e.length){var a={Authorization:"Bearer ".concat(m)},n=void 0,s=void 0;fetch("https://api.spotify.com/v1/me",{headers:a}).then((function(t){return t.json()})).then((function(t){return n=t.id})).then((function(){var c="https://api.spotify.com/v1/users/".concat(n,"/playlists");fetch(c,{method:"POST",headers:a,body:JSON.stringify({name:t})}).then((function(t){return t.json()})).then((function(t){return s=t.id})).then((function(){var t="https://api.spotify.com/v1/users/".concat(n,"/playlists/").concat(s,"/tracks");fetch(t,{method:"POST",headers:a,body:JSON.stringify({uris:e})})}))}))}}},v=b,f=(a(16),a(0)),k=function(t){Object(u.a)(a,t);var e=Object(d.a)(a);function a(t){var n;return Object(o.a)(this,a),(n=e.call(this,t)).state={term:""},n.search=n.search.bind(Object(h.a)(n)),n.handleTermChange=n.handleTermChange.bind(Object(h.a)(n)),n}return Object(l.a)(a,[{key:"search",value:function(){this.props.onSearch(this.state.term)}},{key:"handleTermChange",value:function(t){this.setState({term:t.target.value})}},{key:"render",value:function(){return Object(f.jsxs)("div",{className:"SearchBar",children:[Object(f.jsx)("input",{onChange:this.handleTermChange,placeholder:"Enter A Song, Album, or Artist"}),Object(f.jsx)("button",{className:"SearchButton",onClick:this.search,children:"SEARCH"})]})}}]),a}(s.a.Component),y=(a(18),function(t){Object(u.a)(a,t);var e=Object(d.a)(a);function a(t){var n;return Object(o.a)(this,a),(n=e.call(this,t)).addTrack=n.addTrack.bind(Object(h.a)(n)),n.removeTrack=n.removeTrack.bind(Object(h.a)(n)),n}return Object(l.a)(a,[{key:"addTrack",value:function(){this.props.onAdd(this.props.track)}},{key:"removeTrack",value:function(){this.props.onRemove(this.props.track)}},{key:"renderAction",value:function(){return this.props.onRemove?Object(f.jsx)("button",{className:"Track-action",onClick:this.removeTrack,children:"-"}):Object(f.jsx)("button",{className:"Track-action",onClick:this.addTrack,children:"+"})}},{key:"render",value:function(){return Object(f.jsxs)("div",{className:"Track",children:[Object(f.jsxs)("div",{className:"Track-information",children:[Object(f.jsx)("h3",{children:this.props.track.name}),Object(f.jsxs)("p",{children:[this.props.track.artist," | ",this.props.track.album]})]}),this.renderAction()]})}}]),a}(s.a.Component)),O=function(t){Object(u.a)(a,t);var e=Object(d.a)(a);function a(){return Object(o.a)(this,a),e.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var t=this;return Object(f.jsx)("div",{className:"TrackList",children:this.props.tracks.map((function(e){return Object(f.jsx)(y,{track:e,onRemove:t.props.onRemove,onAdd:t.props.onAdd,isRemoval:t.props.isRemoval},e.id)}))})}}]),a}(s.a.Component),T=O,g=(a(19),function(t){Object(u.a)(a,t);var e=Object(d.a)(a);function a(){return Object(o.a)(this,a),e.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(f.jsxs)("div",{className:"SearchResults",children:[Object(f.jsx)("h2",{children:"Results"}),Object(f.jsx)(T,{tracks:this.props.searchResults,onAdd:this.props.onAdd,isRemoval:!1})]})}}]),a}(s.a.Component)),N=g,x=(a(20),function(t){Object(u.a)(a,t);var e=Object(d.a)(a);function a(t){var n;return Object(o.a)(this,a),(n=e.call(this,t)).handleNameChange=n.handleNameChange.bind(Object(h.a)(n)),n}return Object(l.a)(a,[{key:"handleNameChange",value:function(t){this.props.onNameChange(t.target.value)}},{key:"render",value:function(){return Object(f.jsxs)("div",{className:"Playlist",children:[Object(f.jsx)("input",{defaultValue:"New Playlist",onChange:this.handleNameChange}),Object(f.jsx)(T,{tracks:this.props.playlistTracks,onRemove:this.props.onRemove,isRemoval:!0}),Object(f.jsx)("button",{className:"Playlist-save",onClick:this.props.onSave,children:"SAVE TO SPOTIFY"})]})}}]),a}(s.a.Component)),C=function(t){Object(u.a)(a,t);var e=Object(d.a)(a);function a(t){var n;return Object(o.a)(this,a),(n=e.call(this,t)).state={searchResults:[],playlistName:"My playlist",playlistTracks:[]},n.updatePlaylistName=n.updatePlaylistName.bind(Object(h.a)(n)),n.addTrack=n.addTrack.bind(Object(h.a)(n)),n.removeTrack=n.removeTrack.bind(Object(h.a)(n)),n.savePlaylist=n.savePlaylist.bind(Object(h.a)(n)),n.search=n.search.bind(Object(h.a)(n)),n}return Object(l.a)(a,[{key:"addTrack",value:function(t){this.state.playlistTracks.find((function(e){return e.id===t.id}))||this.setState((function(e){return{playlistTracks:[].concat(Object(r.a)(e.playlistTracks),[t])}}))}},{key:"removeTrack",value:function(t){this.setState({playlistTracks:this.state.playlistTracks.filter((function(e){return e.id!==t.id}))})}},{key:"updatePlaylistName",value:function(t){this.setState({playlistName:t})}},{key:"savePlaylist",value:function(){var t=this.state.playlistTracks.map((function(t){return t.uri}));v.savePlaylist(this.state.playlistName,t),this.setState({searchResults:[]}),this.updatePlaylistName("My playlist"),console.info(t)}},{key:"search",value:function(t){var e=this;v.search(t).then((function(t){return e.setState({searchResults:t})}))}},{key:"render",value:function(){return Object(f.jsxs)("div",{children:[Object(f.jsxs)("h1",{children:["Ja",Object(f.jsx)("span",{className:"highlight",children:"mmm"}),"ing"]}),Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)(k,{onSearch:this.search}),Object(f.jsxs)("div",{className:"App-playlist",children:[Object(f.jsx)(N,{searchResults:this.state.searchResults,onAdd:this.addTrack}),Object(f.jsx)(x,{playlistTracks:this.state.playlistTracks,playlistName:this.state.playlistName,onRemove:this.removeTrack,onNameChange:this.updatePlaylistName,onSave:this.savePlaylist})]})]})]})}}]),a}(s.a.Component),S=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,22)).then((function(e){var a=e.getCLS,n=e.getFID,s=e.getFCP,c=e.getLCP,i=e.getTTFB;a(t),n(t),s(t),c(t),i(t)}))};i.a.render(Object(f.jsx)(s.a.StrictMode,{children:Object(f.jsx)(C,{})}),document.getElementById("root")),S()}],[[21,1,2]]]);
//# sourceMappingURL=main.698d1e77.chunk.js.map