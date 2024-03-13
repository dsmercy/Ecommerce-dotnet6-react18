CREATE TABLE [dbo].[Product] (
    [Id]          VARCHAR (200)   NOT NULL,
    [ProductName] VARCHAR (200)   NOT NULL,
    [CategoryId]  VARCHAR (200)   NOT NULL,
    [Quantity]    INT             NOT NULL,
    [PriceUnit]   VARCHAR (200)   NULL,
    [Price]       DECIMAL (18, 2) NOT NULL,
    [OfferPrice]  DECIMAL (18, 2) NOT NULL,
    [Description] VARCHAR (MAX)   NULL,
    [InStock]     BIT             NOT NULL,
    [CreatedOn]   VARCHAR (200)   NULL,
    CONSTRAINT [PK_Product] PRIMARY KEY CLUSTERED ([Id] ASC)
);





