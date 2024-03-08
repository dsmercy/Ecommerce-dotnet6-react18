//using Dapper;
//using Moq;
//using VeggieFood.Models.Models.ViewModels;
//using VeggieFood.Repository.Repository;
//using VeggieFood.REPOSITORY.Repository;
//using VeggiFoodAPI.Models;
//using VeggiFoodAPI.Models.DTOs;

//namespace VeggiFoodAPI.Tests
//{
//    public class CategoryRepositoryTests
//    {
//        private readonly Mock<IDapperGenericRepository> _mockGenericRepository;
//        private readonly CategoryRepository _categoryRepository;

//        public CategoryRepositoryTests()
//        {
//            _mockGenericRepository = new Mock<IDapperGenericRepository>();
//            _categoryRepository = new CategoryRepository(_mockGenericRepository.Object);
//        }

//        [Fact]
//        public async Task Add_Success_Test()
//        {
//            // Arrange
//            var category = new CategoryModel { CategoryName = "test" };
//            var expectedResponse = new ResponseDapper { ResponseNumber = 1, ResponseMessage = "test" };

//            _mockGenericRepository.Setup(repo => repo.AddWithDynamicParam<ResponseDapper>(It.IsAny<string>(), It.IsAny<DynamicParameters>()))
//                .ReturnsAsync(expectedResponse);

//            // Act
//            var actualResponse = await _categoryRepository.Add(category);

//            // Assert
//            Assert.Equal(expectedResponse, actualResponse);
//        }

//        [Fact]
//        public async Task Add_Exception_Test()
//        {
//            // Arrange
//            var category = new CategoryModel { CategoryName = "test" };
//            var expectedResponse = new ResponseDapper { ResponseNumber = 1, ResponseMessage = "test" };

//            _mockGenericRepository.Setup(repo => repo.AddWithDynamicParam<ResponseDapper>(It.IsAny<string>(), It.IsAny<DynamicParameters>()))
//                .ThrowsAsync(new Exception("Something went wrong."));

//            // Act

//            // Assert
//            await Assert.ThrowsAsync<Exception>(() => _categoryRepository.Add(category));
//        }

//        [Fact]
//        public async Task Get_ValidCategory_ReturnsResponse()
//        {
//            // Arrange
//            var category = new Category { Id = 1, CategoryName="test" };
//            var expectedResponse = new ResponseDapper { ResponseNumber = 1, ResponseMessage = "test" };

//            _mockGenericRepository.Setup(repo => repo.Get<ResponseDapper>(It.IsAny<string>(), It.IsAny<DynamicParameters>()))
//                .ReturnsAsync(expectedResponse);

//            // Act
//            var actualResponse = await _categoryRepository.Get(category);

//            // Assert
//            Assert.Equal(expectedResponse, actualResponse);
//        }

//        [Fact]
//        public async Task GetAll_ReturnsResponse()
//        {
//            // Arrange
//            var expectedResponse = new ResponseDapper { ResponseNumber = 1, ResponseMessage = "test" };

//            _mockGenericRepository.Setup(repo => repo.GetEntities<ResponseDapper>(It.IsAny<string>(), It.IsAny<DynamicParameters>()))
//                .ReturnsAsync(expectedResponse);

//            // Act
//            var actualResponse = await _categoryRepository.GetAll();

//            // Assert
//            Assert.Equal(expectedResponse, actualResponse);
//        }

//        [Fact]
//        public async Task Remove_ValidCategory_ReturnsResponse()
//        {
//            // Arrange
//            var category = new Category { Id = 1, CategoryName = "test" };
//            var expectedResponse = new ResponseDapper { ResponseNumber = 1, ResponseMessage = "test" };

//            _mockGenericRepository.Setup(repo => repo.AddWithDynamicParam<ResponseDapper>(It.IsAny<string>(), It.IsAny<DynamicParameters>()))
//                .ReturnsAsync(expectedResponse);

//            // Act
//            var actualResponse = await _categoryRepository.Remove(category);

//            // Assert
//            Assert.Equal(expectedResponse, actualResponse);
//        }

//        [Fact]
//        public async Task Update_ValidCategory_ReturnsResponse()
//        {
//            // Arrange
//            var category = new Category { Id = 1, CategoryName = "test" };
//            var expectedResponse = new ResponseDapper { ResponseNumber = 1, ResponseMessage = "test" };

//            _mockGenericRepository.Setup(repo => repo.AddWithDynamicParam<ResponseDapper>(It.IsAny<string>(), It.IsAny<DynamicParameters>()))
//                .ReturnsAsync(expectedResponse);

//            // Act
//            var actualResponse = await _categoryRepository.Update(category);

//            // Assert
//            Assert.Equal(expectedResponse, actualResponse);
//        }
//    }
//}