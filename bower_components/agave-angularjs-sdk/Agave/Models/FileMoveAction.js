/**
 *AgavePlatformScienceAPILib
 *
 * This file was automatically generated by APIMATIC BETA v2.0 on 10/07/2015
 */

//Request for a file/folder to be moved on the target system. Metadata will be preserved after move.
function FileMoveAction() {
    this.action = "MOVE";
    this.append = false;
}

//Make instanceof work
FileMoveAction.prototype = new FileAction();

FileMoveAction.prototype.constructor = FileMoveAction;



/**
 *The relative or absolute path of the renamed file/folder.
 *
 * @return: string
 */
    FileAction.prototype.getPath = function () {

    return this.path;
}


FileAction.prototype.setPath = function (value) {
    this.path = value;
}





