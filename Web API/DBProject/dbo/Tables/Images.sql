CREATE TABLE [dbo].[Images] (
    [Id]        INT           IDENTITY (1, 1) NOT NULL,
    [ImageType] VARCHAR (200) NULL,
    [ImagePath] VARCHAR (200) NULL,
    [ProductId] INT           NOT NULL,
    CONSTRAINT [PK_Images] PRIMARY KEY CLUSTERED ([Id] ASC),
    CONSTRAINT [FK_Images_Product] FOREIGN KEY ([ProductId]) REFERENCES [dbo].[Product] ([Id])
);

