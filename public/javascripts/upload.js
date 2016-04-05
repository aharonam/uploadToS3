/**
 * Created by aharon.amram on 4/4/2016.
 */

(function (window) {
    var apigClient = apigClientFactory.newClient({
        region: 'us-west-2'
    });

    debugger;

    var params = {
        //This is where any header, path, or querystring request params go. The key is the parameter named as defined in the API
        "configid": 'aharon_template_test.txt',
        "Content-Type": "application/text"
    };
    var body = {
        "file": "hello this is just a test"
    };
    var additionalParams = {
        //If there are any unmodeled query parameters or headers that need to be sent with the request you can add them here
        headers: {
            param0: '',
            param1: ''
        },
        queryParams: {
            param0: '',
            param1: ''
        }
    };

    apigClient.apiV1TemplateConfigidPut(params, "this is just a test", {})
        .then(function(result){
            debugger;
        }).catch( function(result){
        debugger;
    });

})(window);
