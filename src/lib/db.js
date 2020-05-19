let collections = {
    "future": [
        { type: "note", state: "todo", text: "Quisque efficitur lectus nec massa tristique, sit amet rhoncus quam bibendum."},
        { type: "note", state: "todo", text: "Nunc convallis ipsum et maximus scelerisque."},
        { type: "note", state: "todo", text: "Mauris interdum tellus sit amet aliquet convallis."},
        { type: "note", state: "todo", text: "Pellentesque eu libero venenatis, ornare diam a, iaculis metus."},
        { type: "note", state: "todo", text: "Suspendisse vitae ipsum et lorem euismod vehicula."}
    ],
        "2020-04-01" : [
         { type: "note", state: "todo", text: "Integer pharetra orci nec rutrum suscipit."},
        { type: "note", state: "todo", text: "Vivamus tincidunt libero vitae velit maximus faucibus."},
        { type: "note", state: "todo", text: "Nullam mattis sapien ornare tortor aliquam, faucibus viverra quam rutrum."}
  
    ],
    "2020-05-01" : [
         { type: "note", state: "todo", text: "Praesent porta tortor nec leo ultricies bibendum."},
        { type: "note", state: "todo", text: "Integer molestie nibh ac finibus facilisis."},
        { type: "note", state: "todo", text: "Sed mollis enim quis tempus laoreet."},
        { type: "note", state: "todo", text: "Duis ultrices lectus at diam dictum eleifend."},
        { type: "note", state: "todo", text: "Donec eget purus tincidunt, vehicula purus id, iaculis mi."}       
    ],
        "2020-06-01" : [
         { type: "note", state: "todo", text: "Aliquam consequat nulla a lorem aliquet, vel pulvinar risus ullamcorper."},
        { type: "note", state: "todo", text: "Aliquam nec eros venenatis, rhoncus sem at, dignissim sem."}      
    ]
}

export const getCollection = (name) => {return collections[name]}