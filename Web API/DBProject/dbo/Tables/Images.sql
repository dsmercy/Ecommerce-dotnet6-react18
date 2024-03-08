CREATE TABLE [dbo].[Images] (
    [Id]        VARCHAR (200) NOT NULL,
    [ImageType] VARCHAR (200) NULL,
    [ImagePath] VARCHAR (200) NULL,
    [ProductId] VARCHAR (200) NOT NULL,
    CONSTRAINT [PK_Images] PRIMARY KEY CLUSTERED ([Id] ASC)
);



