describe('The httpService', function(){
    var httpService, $httpBackend,

        expect = chai.expect;

    beforeEach(inject(function(_$httpBackend_, _httpService_){
        $httpBackend = _$httpBackend_;
        httpService = _httpService_;
    }));

    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    describe('The get method', function(){
        it('Should execute the http GET request', function(){
            $httpBackend.expectGET('/some_url').respond({});
            httpService.get('/some_url');
            $httpBackend.flush();
        });
    });

    describe('The post method', function(){
        it('Should execute the http POST request', function(){
            var data = {};
            $httpBackend.expectPOST('/some_url', data).respond({});
            httpService.post('/some_url', data);
            $httpBackend.flush();
        });
    });
});