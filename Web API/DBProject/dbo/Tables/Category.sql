CREATE TABLE [dbo].[Category] (
    [Id]           VARCHAR (200) NOT NULL,
    [CategoryName] VARCHAR (50)  NULL,
    [ParentId]     VARCHAR (200) NOT NULL,
    CONSTRAINT [PK_Category] PRIMARY KEY CLUSTERED ([Id] ASC)
);



