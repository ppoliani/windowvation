describe('The responseParser service', function(){
    var responseParser,

        expect = chai.expect;

    beforeEach(inject(function(_responseParser_){
        responseParser = _responseParser_;
    }));

    describe('The parseResponse method', function(){
        it('Should return the HTTP method and the url of the next request', function(){
            // Arrange
            var response = 'Hello Pavlos! GET the first question from /user/264/question';

            // Act
            var result = responseParser.parseResponse(response);

            // Assert
            expect(result.httpMethod).to.equal('GET');
            expect(result.url).to.equal('/user/264/question');
        });
    });

    describe('The parseQuestionResponse method', function(){
        it('Should return the HTTP method, the url of the next request and the operation', function(){
            // Arrange
            var response = 'What is 79 plus 13? POST answer=[answer] to /user/264/answer';

            // Act
            var result = responseParser.parseQuestionResponse(response);

            // Assert
            expect(result.httpMethod).to.equal('POST');
            expect(result.url).to.equal('/user/264/answer');
            expect(result.operation[0]).to.equal(79);
            expect(result.operation[1]).to.equal('plus');
            expect(result.operation[2]).to.equal(13);
        });
    });
});