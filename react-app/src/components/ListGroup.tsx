function ListGroup () {
    return 
    <ul class="list-group">
        <li class="list-group-item">An item</li>
        <li class="list-group-item">A second item</li>
        <li class="list-group-item">A third item</li>
        <li class="list-group-item">A fourth item</li>
        <li class="list-group-item">And a fifth one</li>
    </ul>;

    // the above errors are because 'class' is a reserved keyword
    // in js or ts, so we need to rename all of them to 'className'
}

export default ListGroup;