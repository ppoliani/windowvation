describe('The mathOperationManager service', function(){
   var mathOperationManager,

       expect = chai.expect;

    beforeEach(inject(function(_mathOperationManager_){
        mathOperationManager = _mathOperationManager_;
    }));

    describe('The getResult method', function(){
        it('Should return the correct plus operation result', function(){
            // Arrange
            var operation = '5 plus 5';

            // Act
            var result = mathOperationManager.getResult(operation);

            //Assert
            expect(result).to.equal(10);
        });
    });
});