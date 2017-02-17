/**
 *AgavePlatformScienceAPILib
 *
 * This file was automatically generated by APIMATIC BETA v2.0 on 10/07/2015
 */

function PostIt() {
    this.url = undefined
    this.internalUsername = undefined
    this.method = undefined
    this.lifetime = undefined
    this.maxUses = undefined
    this.noauth = undefined
}

//Make instanceof work


/**
 *The url that will be invoked when the PostIt is redeemed.
 *
 * @return: string
 */
PostIt.prototype.getUrl = function () {

    return this.url;
}


PostIt.prototype.setUrl = function (value) {
    this.url = value;
}


/**
 *The username of the internal user attached to this PostIt.
 *
 * @return: string
 */
PostIt.prototype.getInternalUsername = function () {

    return this.internalUsername;
}


PostIt.prototype.setInternalUsername = function (value) {
    this.internalUsername = value;
}


/**
 *The method that will be invoked when the PostIt is redeemed.
 *
 * @return: PostItMethodEnum
 */
PostIt.prototype.getMethod = function () {

    return this.method;
}


PostIt.prototype.setMethod = function (value) {
    this.method = value;
}


/**
 *The maximum lifetime in seconds of this PostIt on this token. Defaults to 2592000 (30 days)
 *
 * @return: int
 */
PostIt.prototype.getLifetime = function () {

    return this.lifetime;
}


PostIt.prototype.setLifetime = function (value) {
    this.lifetime = value;
}


/**
 *The maximum number of invocations remaining on this PostIt. Defaults to no limit
 *
 * @return: int
 */
PostIt.prototype.getMaxUses = function () {

    return this.maxUses;
}


PostIt.prototype.setMaxUses = function (value) {
    this.maxUses = value;
}


/**
 *If true, the provided url will be called without authentication. Default is false
 *
 * @return: bool
 */
PostIt.prototype.getNoauth = function () {

    return this.noauth;
}


PostIt.prototype.setNoauth = function (value) {
    this.noauth = value;
}
     





