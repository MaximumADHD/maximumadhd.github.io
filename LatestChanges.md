## Client Difference Log

https://github.com/MaximumADHD/Roblox-Client-Tracker/commit/38b8caac32e02c774a463b01d34584bba427507a

## API Changes

```plain
Added Property PartOperation.SerializedOperationGraph: SharedString [Hidden] [NotReplicated] [NotScriptable]
Added Property Path2D.ControlPointLeftTangent: UDim2 {RobloxScriptSecurity} [📁 LoadOnly] [NotReplicated]
Added Property Path2D.ControlPointPosition: UDim2 {RobloxScriptSecurity} [📁 LoadOnly] [NotReplicated]
Added Property Path2D.ControlPointRightTangent: UDim2 {RobloxScriptSecurity} [📁 LoadOnly] [NotReplicated]
Added Property Path2D.PropertiesSerialize: BinaryString {RobloxScriptSecurity} [Hidden] [NotScriptable]
Added Property Studio.EnableCodeAssist: boolean {RobloxScriptSecurity}

Added Function AccountService:GetDeviceIntegrityTokenYield(data: string) -> string {RobloxScriptSecurity} [Yields]
Added Function StreamingService:RunSandboxedCode(code: string) -> ...any {RobloxScriptSecurity} [Yields]
Added Function UGCValidationService:ValidateCageUVCoincident(meshId: string) -> boolean {RobloxScriptSecurity} [Yields]
Added Function UGCValidationService:ValidateEditableMeshCageUVCoincident(editableMesh: EditableMesh) -> boolean {RobloxScriptSecurity}
Added Function WireframeHandleAdornment:AddText(point: Vector3, text: string, size: number? = 12) -> ()

Added Tag [NotBrowsable] to Class Path2D

Changed the security of Property Path2D.Color 
	from: {RobloxScriptSecurity}
	  to: {None}

Changed the security of Property Path2D.Position 
	from: {RobloxScriptSecurity}
	  to: {None}

Changed the security of Property Path2D.Visible 
	from: {RobloxScriptSecurity}
	  to: {None}

Changed the security of Property Path2D.ZIndex 
	from: {RobloxScriptSecurity}
	  to: {None}

Changed the parameters of Function ScriptContext:DeserializeScriptProfilerString 
	from: (jsonString: string)
	  to: (jsonString: string?)

Changed the security of Function Path2D:GetControlPoint 
	from: {RobloxScriptSecurity}
	  to: {None}

Changed the security of Function Path2D:GetControlPoints 
	from: {RobloxScriptSecurity}
	  to: {None}

Changed the security of Function Path2D:GetPositionOnCurve 
	from: {RobloxScriptSecurity}
	  to: {None}

Changed the security of Function Path2D:GetPositionOnCurveArcLength 
	from: {RobloxScriptSecurity}
	  to: {None}

Changed the security of Function Path2D:GetTangentOnCurve 
	from: {RobloxScriptSecurity}
	  to: {None}

Changed the security of Function Path2D:GetTangentOnCurveArcLength 
	from: {RobloxScriptSecurity}
	  to: {None}

Changed the security of Function Path2D:InsertControlPoint 
	from: {RobloxScriptSecurity}
	  to: {None}

Changed the security of Function Path2D:RemoveControlPoint 
	from: {RobloxScriptSecurity}
	  to: {None}

Changed the security of Function Path2D:SetControlPoints 
	from: {RobloxScriptSecurity}
	  to: {None}

Changed the security of Function Path2D:UpdateControlPoint 
	from: {RobloxScriptSecurity}
	  to: {None}

Changed the parameters of Event StudioPublishService.OnPublishAttempt 
	from: ()
	  to: (isPublishAs: boolean)

Removed Property Path2D.AbsoluteSize

Removed Event TeamCreatePublishService.TeamCreatePublishResult
Removed Event TeamCreatePublishService.TeamCreateReplicatedMessage
Removed Event TeamCreatePublishService.TeamCreateSaveResult

Removed Tag [NotBrowsable] from Property VoiceChatService.UseAudioApi
Removed Tag [NotReplicated] from Class Path2D
```

(Click [here](https://maximumadhd.github.io/Roblox-API-History.html#613) for a syntax highlighted version!)