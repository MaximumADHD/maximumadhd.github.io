## Client Difference Log

https://github.com/MaximumADHD/Roblox-Client-Tracker/commit/8dab716d4560e7519459a50e9231bcab717f3685

## API Changes

```plain
Added Class GetTextBoundsParams : Instance [NotReplicated]
	Added Property Font GetTextBoundsParams.Font
	Added Property float GetTextBoundsParams.Size
	Added Property string GetTextBoundsParams.Text
	Added Property float GetTextBoundsParams.Width

Added Property bool ImporterMeshSettings.CageManifold [ReadOnly]
Added Property bool ImporterMeshSettings.CageManifoldPreview
Added Property bool ImporterMeshSettings.CageNoOverlappingVertices [ReadOnly]
Added Property bool ImporterMeshSettings.CageNoOverlappingVerticesPreview
Added Property bool ImporterRootSettings.UseSceneOriginAsPivot

Added Function Enum.IXPLoadingStatus? IXPService:GetBrowserTrackerStatusForLayer(string layerName) {LocalUserSecurity}
Added Function Enum.IXPLoadingStatus? IXPService:GetUserStatusForLayer(string layerName) {LocalUserSecurity}
Added Function bool MarketplaceService:PlayerOwnsBundle(Player player, int64 bundleId) [Yields]
Added Function ScriptDocument ScriptEditorService:FindScriptDocument(LuaSourceContainer script) {RobloxScriptSecurity}
Added Function Vector2 TextService:GetTextBoundsAsync(GetTextBoundsParams params) [Yields]

Added EnumItem Font.GothamMedium : 18

Changed the write permissions of Property WrapLayer.Order 
	from: {✏️PluginSecurity}
	  to: {✏️None}

Changed the write permissions of Property WrapLayer.Puffiness 
	from: {✏️PluginSecurity}
	  to: {✏️None}

Changed the parameters of Function DebuggerUIService:OpenScriptAtLine 
	from: (string guid, int debuggerConnectionId, int line)
	  to: (string guid, int debuggerConnectionId, int line, bool showErrorOnFail)

Changed the value of EnumItem LSPMethodType.TextDocument_publishDiagnostics from 18 to 19
Changed the value of EnumItem LSPMethodType.Window_showMessage from 19 to 20
Changed the value of EnumItem LSPMethodType.Window_showMessageRequest from 20 to 21
Changed the value of EnumItem LSPMethodType.Roblox_registerSyntaxCategories from 21 to 22
Changed the value of EnumItem LSPMethodType.Roblox_signalQuiescence from 22 to 23
Changed the value of EnumItem LSPMethodType.Roblox_syntaxHighlight from 23 to 24
Changed the value of EnumItem LSPMethodType.Roblox_suggestExtraSelections from 24 to 25
Changed the value of EnumItem LSPMethodType.Roblox_findExecutablePosition from 25 to 26
Changed the value of EnumItem LSPMethodType.Roblox_findColor3 from 26 to 27
Changed the value of EnumItem LSPMethodType.Roblox_patchSnippetData from 27 to 28

Removed Property ImporterMeshSettings.Manifold
Removed Property MaterialService.Brick
Removed Property MaterialService.Cobblestone
Removed Property MaterialService.Concrete
Removed Property MaterialService.CorrodedMetal
Removed Property MaterialService.DiamondPlate
Removed Property MaterialService.Fabric
Removed Property MaterialService.Foil
Removed Property MaterialService.Granite
Removed Property MaterialService.Grass
Removed Property MaterialService.Ice
Removed Property MaterialService.Marble
Removed Property MaterialService.Metal
Removed Property MaterialService.Pebble
Removed Property MaterialService.Plastic
Removed Property MaterialService.Sand
Removed Property MaterialService.Slate
Removed Property MaterialService.SmoothPlastic
Removed Property MaterialService.Wood
Removed Property MaterialService.WoodPlanks
Removed Property MaterialService.TerrainAsphalt
Removed Property MaterialService.TerrainBasalt
Removed Property MaterialService.TerrainBrick
Removed Property MaterialService.TerrainCobblestone
Removed Property MaterialService.TerrainConcrete
Removed Property MaterialService.TerrainCrackedLava
Removed Property MaterialService.TerrainGlacier
Removed Property MaterialService.TerrainGrass
Removed Property MaterialService.TerrainGround
Removed Property MaterialService.TerrainIce
Removed Property MaterialService.TerrainLeafyGrass
Removed Property MaterialService.TerrainLimestone
Removed Property MaterialService.TerrainMud
Removed Property MaterialService.TerrainPavement
Removed Property MaterialService.TerrainRock
Removed Property MaterialService.TerrainSalt
Removed Property MaterialService.TerrainSand
Removed Property MaterialService.TerrainSandstone
Removed Property MaterialService.TerrainSlate
Removed Property MaterialService.TerrainSnow
Removed Property MaterialService.TerrainWoodPlanks

Removed Function MaterialService:ClearOverridePartMaterial
Removed Function MaterialService:ClearOverrideTerrainMaterial
Removed Function MaterialService:GetOverridePartMaterial
Removed Function MaterialService:GetOverrideTerrainMaterial
Removed Function MaterialService:SetOverridePartMaterial
Removed Function MaterialService:SetOverrideTerrainMaterial

Removed EnumItem Font.GothamSemibold
```

(Click [here](https://maximumadhd.github.io/Roblox-API-History.html#529) for a syntax highlighted version!)