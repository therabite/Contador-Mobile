import { Button, StyleSheet, Text, View } from "react-native";

export default function Contador() {
    
    let contador = 0

    function Adicionar() {
        contador++;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Contador</Text>

            <Text style={styles.contador}>
                {contador}
            </Text>

            <Button
                onPress={Adicionar}
                title="+"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
    },

    titulo: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },

    contador: {
        fontSize: 48,
        fontWeight: "bold",
        marginBottom: 20,
        color: "#007AFF",
    },
});