CREATE TABLE [dbo].[Product] (
    [Id]            INT             IDENTITY (1, 1) NOT NULL,
    [ProductName]   VARCHAR (200)   NOT NULL,
    [CategoryId]    INT             NOT NULL,
    [SubCategoryId] INT             NULL,
    [Quantity]      INT             NOT NULL,
    [Price]         DECIMAL (18, 2) NOT NULL,
    [OfferPrice]    DECIMAL (18, 2) NOT NULL,
    [Description]   VARCHAR (MAX)   NULL,
    [InStock]       BIT             NOT NULL,
    [CreatedOn]     DATETIME2 (7)   NULL,
    [UpdatedOn]     DATETIME2 (7)   NULL,
    CONSTRAINT [PK_Product] PRIMARY KEY CLUSTERED ([Id] ASC),
    CONSTRAINT [FK_Product_Category] FOREIGN KEY ([CategoryId]) REFERENCES [dbo].[Category] ([Id])
);

