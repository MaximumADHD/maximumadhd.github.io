## Client Difference Log

https://github.com/MaximumADHD/Roblox-Client-Tracker/commit/6c13b4c00a51356dddde94b31baff6092a5c396f

## API Changes

```plain
Added Class Annotation : Instance
	Added Property Annotation.AuthorColor3: Color3 {RobloxScriptSecurity} [Hidden]
	Added Property Annotation.AuthorId: number {RobloxScriptSecurity} [Hidden]
	Added Property Annotation.Contents: string {RobloxScriptSecurity} [Hidden]
	Added Property Annotation.CreationTimeUnix: number {RobloxScriptSecurity} [Hidden]
	Added Property Annotation.LastModifiedTimeUnix: number {RobloxScriptSecurity} [Hidden]
	Added Property Annotation.Resolved: boolean {RobloxScriptSecurity} [Hidden]
	Added Property Annotation.TaggedUsers: string {RobloxScriptSecurity} [Hidden]

Added Class ColorGradingEffect : PostEffect [NotBrowsable]
	Added Property ColorGradingEffect.TonemapperPreset: Enum.TonemapperPreset

Added Class WorkspaceAnnotation : Annotation
	Added Property WorkspaceAnnotation.Adornee: PVInstance? {RobloxScriptSecurity} [Hidden]
	Added Property WorkspaceAnnotation.Position: CFrame {RobloxScriptSecurity} [Hidden]

Added Class WrapDeformer : BaseWrap [NotBrowsable]
	Added Property WrapDeformer.RenderMeshID: Content {✏️PluginSecurity}
	Added Property WrapDeformer.Enabled: boolean
	Added Property WrapDeformer.Amount: number {✏️PluginSecurity}

Added Property AnnotationsService.Hovered: Annotation? {RobloxScriptSecurity} [Hidden] [NotReplicated]
Added Property AnnotationsService.Selected: Annotation? {RobloxScriptSecurity} [Hidden] [NotReplicated]
Added Property GuiService.PreferredTextSize: Enum.PreferredTextSize [ReadOnly]
Added Property Path2D.Closed: boolean

Added Function AnnotationsService:createAnnotation(annotation: Annotation) -> () {RobloxScriptSecurity}
Added Function AnnotationsService:createWorkspaceAnnotation(adornee: PVInstance, position: CFrame, contents: string) -> () {RobloxScriptSecurity}
Added Function Path2D:GetMaxControlPoints() -> number

Added Event AnnotationsService.AnnotationAdded(annotation: Annotation, parentId: UniqueId) {RobloxScriptSecurity}
Added Event Path2D.ControlPointChanged()

Added Enum TonemapperPreset
	Added EnumItem TonemapperPreset.Default : 0
	Added EnumItem TonemapperPreset.Retro : 1

Added EnumItem KeyCode.MouseLeftButton : 1018
Added EnumItem KeyCode.MouseRightButton : 1019
Added EnumItem KeyCode.MouseMiddleButton : 1020
Added EnumItem KeyCode.MouseBackButton : 1021
Added EnumItem KeyCode.MouseNoButton : 1022
Added EnumItem KeyCode.MouseX : 1023
Added EnumItem KeyCode.MouseY : 1024
Added EnumItem TeleportMethod.TeleportToInstanceBack : 5
Added EnumItem TeleportType.ToInstanceBack : 4

Changed the security of Function Path2D:GetLength 
	from: {RobloxScriptSecurity}
	  to: {None}

Changed the value of EnumItem TeleportMethod.TeleportUnknown from 5 to 6

Removed Class ActivityHistoryService
	Removed Event ActivityHistoryService.EventNotificationReceived
```

(Click [here](https://maximumadhd.github.io/Roblox-API-History.html#634) for a syntax highlighted version!)